<template>
    <div v-if="showModal">
    <Modal header="" @close="toggleModal">
    <p> Trage in die Kästchen die Zahl, die durch die Kartendarstellung gebildet wird ein.
        Du kannst bei der Summe zehn Karten einer Sorte gegen eine Karte der nächstgrösseren Sorte tauschen.
    </p>
  <video src="@/assets/kartenadd.mp4" id="video-container" style="width:70%;height:auto" controls></video>
    </Modal>

    </div>

      <div v-if="showModal1">
        <div v-if="(num1!=sum1)">
        <Modal1 header="Dein erster Summand stimmt noch nicht." @close="showModal1=false" style="color:red">
        <img src="@/assets/wrong.png" alt="">
        </Modal1>
       </div>

        <div v-else-if="(num2!=sum2)">
        <Modal1 header="Dein zweiter Summand stimmt noch nicht." @close="showModal1=false" style="color:red">
        <img src="@/assets/wrong.png" alt="">
        </Modal1>
       </div>

       <div v-else-if="(num3!=s1sum)">
        <Modal1 header="Deine Summe stimmt noch nicht." @close="showModal1=false" style="color:red">
        <img src="@/assets/wrong.png" alt="">
        </Modal1>
       </div>

      <div v-else-if="state">
        <Modal1 header="SUPER!" @close="showModal1=false" style="color:green">
        <img src="@/assets/right.png" alt="" style="">
        </Modal1>
      </div>

      <div v-else>
        <Modal1 header="Das ist noch nicht die korrekte Kartendarstellung." @close="showModal1=false" style="color:red">
        <img src="@/assets/wrong.png" alt="">
        </Modal1>

      </div>

    </div>

    <!--
    <p class="text" >
        <img src="@/assets/alice.png" alt="" style="display:flex;flex-direction: column;margin-left:48%;height:5%;width:5%">
        Alice hat heute in der Schule die dezimale Kartendarstellung gelernt
        und möchte dies zu Hause mit ihren Karten üben. <br>
        Dazu hat sie zwei Zahlen in Kartendarstellung dargestellt.
        Um diese zu addieren tut sie zuerst alle Karten zusammen. <br>
        Im zweiten Schritt tauscht sie nun ihre Karten so lange aus, bis Sie
        am Schluss die korrekte Kartendarstellung für die Summe hat.
        Deine Aufgabe ist es herauszufinden, welche zwei Summanden Alice benutzt und ihre Summe nach dem
        Kombinieren anzugeben. Anschliessend tausche die Karten so lange aus, bis wir die korrekte Kartendarstellung haben.
    </p>-->
    <h1>Kartenaddition</h1>
    <h2>Gib die Werte der zwei Summanden und der Summe an. Anschliessend bringe die Summe durch Austauschen 
        in die korrekte Kartendarstellung
    </h2>
<br>
    <p style="display:flex;flex-direction: column;float:left;row-gap:10px;margin-left:500px;margin-right:10px">
      <span><strong><input v-model="num1" placeholder="" style="width:25%"  />:</strong></span>
    <!--{{sum1}}:-->
    </p>
    <div style="display:flex;flex-direction:row">
    
    <br>

    <!--erste zahl-->
    <div style="display:flex;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
    <template v-for='index in zt1' :key='index' >
       <button >
           10000
       </button>
    </template>
    </div>


    <div style="display:flex;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
    <template v-for='index in t1' :key='index' st>
       <button >
           1000
       </button>
    </template>
    </div>

    <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
    <template v-for='index in h1' :key='index'>
       <button >
           100
       </button>
    </template>
    </div>

    <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
    <template v-for='index in z1' :key='index'>
       <button >
           10
       </button>
       </template>
    </div>

    <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
    <template v-for='index in e1' :key='index'>
       <button >
           1
       </button>
    </template>
   </div>
    </div>
    <br>
    <br>
    
    <!-- zweite zahl-->
    <div style="display:flex;flex-direction:row">
    
    <p style="display:flex;flex-direction: column;float:left;row-gap:10px;margin-left:500px;margin-right:10px">
        <span><strong><input v-model="num2" placeholder="" style="width:25%;"  />:</strong></span>
    <!--{{sum2}}:-->
    </p>

    <div style="display:flex;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
    <template v-for='index in zt2' :key='index' >
       <button >
           10000
       </button>
    </template>
    </div>


    <div style="display:flex;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
    <template v-for='index in t2' :key='index'>
       <button >
           1000
       </button>
    </template>
    </div>

    <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
    <template v-for='index in h2' :key='index'>
       <button >
           100
       </button>
    </template>
    </div>

    <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
    <template v-for='index in z2' :key='index'>
       <button >
           10
       </button>
       </template>
    </div>

    <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
    <template v-for='index in e2' :key='index'>
       <button >
           1
       </button>
    </template>
   </div>
    </div>
    <br>
    <!-- ergebnis -->
    
    <p>Addiert man alle Karten zusammen erhalten wir:</p>
    <div style="display:flex;flex-direction:row;margin-left:0px">
    
  <p style="display:flex;flex-direction: column;float:left;row-gap:10px;margin-left:485px;margin-right:10px">
      <span><strong><input v-model="num3" placeholder="" style="width:25%"  />:</strong></span>
    <!--{{s1sum}}:-->
    </p>

     <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:17px;margin-right:10px">
        <div v-if="(azt==0)">
                <button style="background-color:grey;border: solid black;
    border-width: thin;opacity: 0.5;
    ">10000</button></div>
    <template v-for='index in (azt)' :key='index'>
       <button >
           10000
       </button>
    </template>
    </div>


    <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:17px;margin-right:10px">
         <div v-if="(at==0)">
                <button class="knopf" style="background-color:grey;border: solid black;
    border-width: thin;opacity: 0.5;
    ">1000</button></div>
    <template v-for='index in (at)' :key='index'>
       <button >
           1000
       </button>
    </template>
    </div>

    <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
        <div v-if="(ah==0)">
                <button class="knopf" style="background-color:grey;border: solid black;
    border-width: thin;opacity: 0.5;
    ">100</button></div>
    <template v-for='index in ah' :key='index'>
       <button >
           100
       </button>
    </template>
    </div>

    <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
        <div v-if="(az==0)">
                <button  class="knopf" style="background-color:grey;border: solid black;
    border-width: thin;opacity: 0.5;
    ">10</button></div>
    <template v-for='index in az' :key='index'>
       <button >
           10
       </button>
       </template>
    </div>

    <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
        <div v-if="(ae==0)">
                <button class="knopf" style="background-color:grey;border: solid black;
    border-width: thin;opacity: 0.5;
    ">1</button></div>
    <template v-for='index in ae' :key='index'>
       <button >
           1
       </button>
    </template>
   </div>

    </div>
    <p> Die richtige Kartendarstellung haben wir, wenn von jeder Sorte nicht mehr als neun Stück übrig sind.
        
    </p>

    <div style="display:flex;margin-left:10%;">
    <button class="button" v-on:click="if(at>9){at-=10;azt++;fehlermeldung=false;}else{fehlermeldung=true;}" style="display:flex;margin-left:10%">
        <p>10000 </p>
        <img src="@/assets/arrow.png" alt="" style="color:grey;height:40px;width:40px">
        <p>10 x 1000</p>
    </button>    
    <button class="button" v-on:click="if(ah>9){ah-=10;at++;fehlermeldung=false;}else{fehlermeldung=true;}" style="display:flex;margin-left:10%">
        <p>1000 </p>
        <img src="@/assets/arrow.png" alt="" style="height:40px;width:40px">
        <p>10 x 100</p>
    </button>
     <button class="button" v-on:click="if(az>9){az-=10;ah++;fehlermeldung=false;}else{fehlermeldung=true;}" style="display:flex;margin-left:10%">
        <p>100 </p>
        <img src="@/assets/arrow.png" alt="" style="height:40px;width:40px">
        <p>10 x 10</p>
    </button>
     <button  class="button" v-on:click="if(ae>9){ae-=10;az++;fehlermeldung=false;}else{fehlermeldung=true;}" style="display:flex;margin-left:10%">
        <p>10 </p>
        <img src="@/assets/arrow.png" alt="" style="height:40px;width:40px">
        <p>10 x 1</p>
        
    </button>
     </div>
  
    
   <br>
    

  <div v-if="fehlermeldung">
       <p style="color:red">du brauchst mindestens zehn Karten einer Sorte um zu tauschen</p>
   </div>
   <div v-else>
     <p>&nbsp;</p> 
   </div>

     
    <div style="display:flex;margin-left:40%;">
    <button class="button" v-on:click="check()" style="margin-left:10px;">
      <img src="@/assets/test.png" style="height:40%;width:auto" alt="">
    <p>Überprüfen</p>
    
  </button>

 
 

   <button class="button" v-on:click="reset" style="margin-left:10px;">
     
  <img src="@/assets/reset.png" style="height:40%;width:auto" alt="">
<p>nächste Aufgabe</p>
  </button>

   
<button class="button" @click="toggleModal" style="margin-left:10px;">
    
      <img src="@/assets/help.png" style="height:43%">
       <p>Anleitung</p>
      </button>
   </div>

  



   


    
</template>


<script>
import Modal from '@/components/Modal.vue'
import Modal1 from '@/components/Verifier.vue'

export default {
    components:{Modal,Modal1},
    data(){
        return{
            
            zt1:this.random(1,4),
            t1:this.random(3,10),
            h1:this.random(3,10),
            z1:this.random(3,10),
            e1:this.random(3,10),
            zt2:this.random(1,4),
            t2:this.random(3,10),
            h2:this.random(3,10),
            z2:this.random(3,10),
            e2:this.random(3,10),
            
            s1t:0,
            s1h:0,
            s1z:0,
            s1e:0,
            s1zt:0,
            sum1:0,
            sum2:0,
            s1sum:0,
            s1res:0,
            s1resultat:false,
            abgabe:false,
            abgabe2:false,
            locked:true,
            ae:0,
            az:0,
            ah:0,
            at:0,
            azt:0,
            fehlermeldung:false,
            showModal:false,
            showModal1:false,
            state:false,
            num1:'',
            num2:'',
            num3:''

            
            
        }
    },
        created: function(){
         this.init()
        },
    methods:{
        
        random(min,max) {   //range [min,max)
            return Math.floor(Math.random() * (max - min)) + min;
        },
        init(){
            this.calc();
            this.s1sum = this.sum1+this.sum2;
            this.ae=this.e1+this.e2;
            this.az=this.z1+this.z2;
            this.ah=this.h1+this.h2;
            this.at=this.t1+this.t2;
            this.azt=this.zt1+this.zt2;
            this.state=false;
            this.showModal=false;
        },
        calc(){
            this.sum1=this.t1*1000+this.h1*100+this.z1*10+this.e1+this.zt1*10000
            this.sum2=this.t2*1000+this.h2*100+this.z2*10+this.e2+this.zt2*10000
        },
        check(){
            if (this.ae<10&&this.az<10&&this.ah<10&&this.at<10)
                this.state=true;
            else this.state=false;
            this.abgabe=true;
            this.toggleModal1();
            
        },
        reset(){
            this.zt1=this.random(1,4),
            this.t1=this.random(3,10),
            this.h1=this.random(3,10),
            this.z1=this.random(3,10),
            this.e1=this.random(3,10),
            this.zt2=this.random(1,4),
            this.t2=this.random(3,10),
            this.h2=this.random(3,10),
            this.z2=this.random(3,10),
            this.e2=this.random(3,10),
            this.fehlermeldung=false,
            this.num1=''
            this.num2=''
            this.num3=''
            this.init()
        },
        toggleModal(){
      this.showModal= !this.showModal
    },
    toggleModal1(){
      this.showModal1= true;
    }
    }
}
</script>

<style scoped>
.button {
    cursor: pointer;
   
    /*background-color: #ffe5b2;*/
    border-radius: 10px;
    border: solid black;
    border-width: thin;
    background-color: rgb(241, 240, 240);
    
    
  }
  .text {
     border-radius: 10px;
    border: solid black; 
    background-color:white ;
  }
</style>
