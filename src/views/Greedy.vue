<template>

    <div v-if="showModal">
    <Modal header="" @close="toggleModal">
    <p style="text-align: center;margin-left:20%;margin-right:20%">Wir wollen Zahlen in dezimaler Zahlendarstellung in die binäre Darstellung mit dem
        Greedy Verfahren umwandeln. 
        Dazu überlegen wir uns für eine gegebene Zahl, zum Beispiel 200, welche die grösste
        Zweierpotenz ist, die in 200 reinpasst also 128 = 2^7 und rechnen 200-128 = 72.
        Nun ist die grösste 2er Potenz die in 72 reinpasst 64 = 2^6. Wir rechnen 72-64 = 8.
        Die nächsten Münzen 32 = 2^5 und 16 = 2^4 passen nicht in die 8 rein aber wir sehen,
        dass 8 = 2^3 also können wir den Restbetrag vollständig mit der 8er Münze abdecken
        und erhalten 11001000
    </p>
   (<i>a</i> + <i>b</i> + √<i>c</i>)<span class=sup>2<i>x</i> + <i>b</i></span>
    </Modal>
    </div>

   

    

     

    <br>
   <div>
    <span>Gesuchte Zahl ist: {{target}}  &nbsp;&nbsp;  Wert bis jetzt: {{sofar}}      &nbsp;&nbsp;       
    <template v-if="(target-sofar==0)"><span style="color:green;" >Restbetrag ist: {{target-sofar}}</span> </template>
    <template v-else> Restbetrag ist: {{target-sofar}} </template>
    </span>
   
</div>
<p>Damit du siehst was gerechnet wird, siehst du unten den Rechnungsverlauf:</p>
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



   
  
    
   <p>ZweierPotenz</p> 
   <button  v-on:click="better=false;tooBig=false; clickhandler(128,7);">128</button>
    <button  v-on:click="better=false;tooBig=false; clickhandler(64,6);">64</button>
    <button  v-on:click="better=false;tooBig=false; clickhandler(32,5);">32</button>
    <button  v-on:click="better=false;tooBig=false; clickhandler(16,4);">16</button>
    <button  v-on:click="better=false;tooBig=false; clickhandler(8,3);">8</button>
    <button  v-on:click="better=false;tooBig=false; clickhandler(4,2);">4</button>
    <button  v-on:click="better=false;tooBig=false; clickhandler(2,1);">2</button>
     <button  v-on:click="better=false;tooBig=false; clickhandler(1,0);">1</button>


    <p>Binäre Darstellung:</p>

   <!--<p>rest ist {{pre}}</p>
    <h1>LISTE {{list}}</h1>-->
   
     
     <a class="square"> &nbsp; {{seven}} </a> 
     <a class="square"> &nbsp; {{six}} </a> 
     <a class="square"> &nbsp; {{five}}  </a> 
     <a class="square"> &nbsp; {{four}}  </a> 
     <a class="square"> &nbsp; {{three}}  </a> 
     <a class="square"> &nbsp; {{two}}  </a> 
     <a class="square"> &nbsp; {{one}}  </a>
     <a class="square"> &nbsp; {{zero}}  </a>  
     
    <!--
    <button  v-on:click="if (target>56) {return;}else{}">56</button>
    <button  v-on:click="if (target>32){return;}else{}">32</button>
    <button  v-on:click="if (target>16){return;}else{}">16</button>
    <button  v-on:click="if (target>8){return;}else{}">8</button>
    <button  v-on:click="if (target>4){return;}else{}">4</button>
    <button  v-on:click="if (target>2){return;}else{}">2</button>
    <button  v-on:click="if (target>1){return;}else{}">1</button> -->
     <div v-if="target-sofar==0">
       
      <p style="color:green">Super du hast nun die Binäre Darstellung von {{target}} herausbekommen: {{target.toString(2)}}</p> 
      
    </div>
    <div v-else>
    <br><br> &nbsp; &nbsp; &nbsp;
    </div>
    
    <div style="display:flex;margin-left:40%;">
    <button  v-on:click="reset" style="margin-left:10px;">
  <img src="@/assets/reset.png" style="height:40%;width:auto" alt="">
<p>nächste Aufgabe</p>
  </button>
  <button @click="toggleModal" style="margin-left:10px;">
    
      <img src="@/assets/help.png" alt="">
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
  height: 20px;
  width: 20px;
  background-color: white;
  
  margin-left: 10px;
  margin-right: 10px;
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
    margin: 0px 15% 10px 200px;

    background: white;
    
}
button{
  margin-left: 10px;
  margin-right: 10px;
}


</style>