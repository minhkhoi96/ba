<template>

    <div v-if="showModal">
    <Modal header="" @close="toggleModal">
    <p >
        Wir überlegen uns für eine gegebene Zahl, zum Beispiel 200, welche die grösste
        Zweierpotenz ist, die in 200 reinpasst also 128 = <var>2<sup>7</sup></var> und rechnen 200-128 = 72.
        Nun ist die grösste 2er Potenz die in 72 reinpasst 64 = <var>2<sup>6</sup></var>. Wir rechnen 72-64 = 8.
        Die nächsten Münzen 32 = <var>2<sup>5</sup></var> und 16 = <var>2<sup>4</sup></var> passen nicht in die 8 rein aber wir sehen,
        dass 8 = <var>2<sup>3</sup></var> also können wir den Restbetrag vollständig mit der 8er Karte abdecken
        und erhalten 11001000.
        
    </p>
   
   <video src="@/assets/greed.mp4" id="video-container" style="width:70%;height:auto" controls></video>
    </Modal>
    </div>

   

    
<h1>Binäre Stellendarstellung</h1>
     <br>

    
   <div>
    <span> <h2> <strong>Gesuchte Zahl ist: {{target}}</strong>  &nbsp;&nbsp;  Wert bis jetzt: {{sofar}}      &nbsp;&nbsp;       
    <template v-if="(target-sofar==0)"><span style="color:green;" >Restbetrag ist: {{target-sofar}}</span> </template>
    <template v-else> Restbetrag ist: {{target-sofar}} </template></h2>
    </span>
   
</div>

      <a class=container>
      Rechnungsverlauf: 
      <br>
      
     
      <template v-for='[first,second,third] in list' :key='first'>
              <p>{{first}} - {{second}} = {{third}}</p>
              
   
      </template>
  
    </a>
    
    <h3 v-if="tooBig" style="color:red;">Deine gewählte Zahl passt nicht in den Restbetrag hinein</h3>
    
     <h3 v-else-if ="better" style="color:red;">Deine gewählte Zahl ist nicht die grösste Zahl, die in den Restbetrag hineinpasst</h3>
    <h3 v-else> &nbsp;&nbsp;&nbsp; </h3>



   
  
    
   <div style=" margin-left:34%;margin-right:auto">

   <div style="display:flex;flex-direction:column;float:left;row-gap:1px">
   <button  v-on:click="better=false;tooBig=false; clickhandler(128,7);"><strong>128 </strong></button>
   <a class="square" style="width:38px;margin-left:10px"> <strong> {{seven}} </strong></a>
  </div>

    <div style="display:flex;flex-direction:column;float:left;row-gap:1px">
    <button  v-on:click="better=false;tooBig=false; clickhandler(64,6);"><strong>64 </strong></button>
    <a class="square" style="width:37px;margin-left:10px"> <strong> {{six}} </strong> </a> 
    </div>

    <div style="display:flex;flex-direction:column;float:left;row-gap:1px">
    <button  v-on:click="better=false;tooBig=false; clickhandler(32,5);"><strong>32 </strong></button>
    <a class="square" style="width:37px;margin-left:10px"> <strong> {{five}} </strong>  </a> 
    </div>

    <div style="display:flex;flex-direction:column;float:left;row-gap:1px">
    <button  v-on:click="better=false;tooBig=false; clickhandler(16,4);"><strong>16 </strong></button>
    <a class="square" style="width:37px;margin-left:10px"> <strong>{{four}}  </strong> </a> 
    </div>

    <div style="display:flex;flex-direction:column;float:left;row-gap:1px">
    <button  v-on:click="better=false;tooBig=false; clickhandler(8,3);"><strong>8 </strong></button>
    <a class="square" style="width:37px;margin-left:10px"><strong> {{three}}  </strong> </a>
    </div>

    <div style="display:flex;flex-direction:column;float:left;row-gap:1px">
    <button  v-on:click="better=false;tooBig=false; clickhandler(4,2);"><strong>4 </strong></button>
    <a class="square" style="width:37px;margin-left:10px"> <strong> {{two}}  </strong> </a> 
    </div>

    <div style="display:flex;flex-direction:column;float:left;row-gap:1px">
    <button  v-on:click="better=false;tooBig=false; clickhandler(2,1);"><strong>2 </strong></button>
    <a class="square" style="width:37px;margin-left:10px"><strong> {{one}}  </strong> </a>
    </div>

    <div style="display:flex;flex-direction:column;float:left;row-gap:1px">
     <button  v-on:click="better=false;tooBig=false; clickhandler(1,0);"><strong>1 </strong></button>
     <a class="square" style="width:37px;margin-left:10px"> <strong> {{zero}}  </strong> </a>  
    </div>
    </div>

    <br>

   <!--<p>rest ist {{pre}}</p>
    <h1>LISTE {{list}}</h1>-->
   
     &nbsp;&nbsp;&nbsp;&nbsp;
     
     
     
    
     
    <!--
    <button  v-on:click="if (target>56) {return;}else{}">56</button>
    <button  v-on:click="if (target>32){return;}else{}">32</button>
    <button  v-on:click="if (target>16){return;}else{}">16</button>
    <button  v-on:click="if (target>8){return;}else{}">8</button>
    <button  v-on:click="if (target>4){return;}else{}">4</button>
    <button  v-on:click="if (target>2){return;}else{}">2</button>
    <button  v-on:click="if (target>1){return;}else{}">1</button> -->
     <div v-if="target-sofar==0">
       
      <h2 style="color:green;font-weight:normal;">Super, du hast nun die binäre Stellendarstellung von <strong>{{target}}</strong> herausbekommen: <strong>{{target.toString(2)}} </strong></h2> 
      
    </div>
    <div v-else>
    <br><br> &nbsp; &nbsp; &nbsp;
    </div>
    
    <div style="display:flex;margin-left:41%;">
    <button class="button" v-on:click="reset" style="margin-left:10px;">
  <img src="@/assets/reset.png" style="height:40%;width:auto" alt="">
<p>nächste Aufgabe</p>
  </button>
  <button class="button" @click="toggleModal" style="margin-left:10px;">
    
      <img src="@/assets/help.png" style="width:70%" alt="">
      <p>Anleitung</p>
      </button>
  
</div>
    
    
</template>



<script>
import Modal from '@/components/Modal.vue'



export default {
  components: {Modal},

  data(){
      return{
      target:this.random(0,256),
      sofar:0,
      eight:0,
      seven:0,
      six:0,
      five:0,
      four:0,
      three:0,
      two:0,
      one:0,
      zero:0,
      tooBig:false,
      better:false,
      showModal:false,
      reversed:false,
      
      activate7:false,
      pre7:0,
      activate6:false,
      pre6:0,
      activate5:false,
      pre5:0,
      activate4:false,
      rest4:0,
      activate3:false,
      rest3:0,
      activate2:false,
      rest2:0,
      activate1:false,
      rest1:0,
      activate0:false,
      rest0:0,
      pre:0,
      first:true,
      list: [],
      length:0
      
      
     
      }
  },
 

  methods:{
      random(min,max) {   //range [min,max)
            return Math.floor(Math.random() * (max - min)) + min;
        },
        reset(){
          this.list=[],
           this.sofar=0,
          this.eight=0,
          this.seven=0,
          this.six=0,
          this.five=0,
          this.four=0,
          this.three=0,
          this.two=0,
          this.one=0,
          this.zero=0,
            this.tooBig=false,
          this.better=false,
          this.showModal=false,
          this.reversed=false,
          this.activate7=false,
         this. pre7=0,
          this.activate6=false,
          this.pre6=0,
          this.activate5=false,
          this.pre5=0,
          this.activate4=false,
          this.rest4=0,
          this.activate3=false,
         this.rest3=0,
          this.activate2=false,
      this.rest2=0,
      this.activate1=false,
      this.rest1=0,
     this.activate0=false,
      this.rest0=0,
      this.pre=0,
      this.first=true,
      this.length=0,
      this.target=this.random(0,256)
     
      
        },
       
      clickhandler(toSub,power){
        
          if(this.first){
             this.pre=this.target;
             this.first=false;
          }
          
          if (toSub> (this.target-this.sofar))
            this.tooBig=true;
          else if (this.target-this.sofar>=toSub && this.target-this.sofar>= 2*toSub){
            this.better=true
          }
         else if (this.target-this.sofar>=toSub){
            
            switch (power) {
              case 7: this.seven=1; this.sofar+=128; this.list.push([this.pre,128,this.pre-128,]); this.pre-=128; this.length++;
              this.activate7=true;  
              break;

              case 6: this.six=1; this.sofar+=64; this.list.push([this.pre,64,this.pre-64,]); this.pre-=64;this.length++;
              this.activate6=true;
              break;

              case 5: this.five=1; this.sofar+=32; this.list.push([this.pre,32,this.pre-32,]); this.pre-=32;this.length++;
              this.activate5=true; 
              break;

              case 4: this.four=1; this.sofar+=16; this.list.push([this.pre,16,this.pre-16,]); this.pre-=16;this.length++;
              this.activate4=true;
              break;

              case 3: this.three=1; this.sofar+=8; this.list.push([this.pre,8,this.pre-8,]);this.pre-=8;this.length++;
              this.activate3=true;
              break;

              case 2: this.two=1; this.sofar+=4; this.list.push([this.pre,4,this.pre-4,]); this.pre-=4;this.length++;
              this.activate2=true;
              break;

              case 1: this.one=1; this.sofar+=2; this.list.push([this.pre,2,this.pre-2,]); this.pre-=2;this.length++;
              this.activate1=true;
              break;

              case 0: this.zero=1; this.sofar+=1; this.list.push([this.pre,1,this.pre-1,]); this.pre-=1;this.length++;
              this.activate0=true;
              break;
 
    default:
    
            } 
            
          }
          
      },
      toggleModal(){
      this.showModal= !this.showModal
    }
      
  }

}
</script>

<style scoped>
.square {
  
  background-color: white;
  
  margin-left: 13px;
  margin-right: 10px;
  border: solid black;
  border-width: thin;
}
.sup {
  
  bottom: 1ex; 
  font-size: 80%;
}

.container {
  display: inline-block;
  flex-direction: column;
  align-items:center;
    min-height: 250px;
    width: 200px;
    border: 1px solid black;
    margin: 0px 14% 10px 200px;

    background: white;
    
}
button{
  margin-left: 10px;
  margin-right: 10px;
}

 .button {
    cursor: pointer;
   
    /*background-color: #ffe5b2;*/
    border-radius: 10px;
    border: solid black;
    border-width: thin;
    
    
  }


</style>