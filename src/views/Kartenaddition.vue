<template>
    <p>Alice hat heute in der Schule die dezimale Kartendarstellung gelernt
        und möchte dies zu Hause mit ihren Karten üben.
        Dazu hat Sie zwei Zahlen in die Kartendarstellung gebracht.
        Um diese zu addieren tut Sie zuerst alle Karten zusammen.
        Im zweiten Schritt tauscht sie nun ihre Karten so lange um, bis Sie
        am Schluss die korrekte Kartendarstellung für die Summe hat.
        Kannst du ihr beim umtauschen helfen?
    </p>

    <p style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:500px;margin-right:10px">
        
    {{sum1}}:
    </p>
    <div style="display:flex;flex-direction:row">
    
    <br>

    <!--erste zahl-->
    <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
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
    
    <!-- zweite zahl-->
    <div style="display:flex;flex-direction:row">
    
    <p style="display:flex;flex-direction: column;float:left;row-gap:10px;margin-left:500px;margin-right:10px">
    {{sum2}}:
    </p>

    <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
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
    <p>Kombiniert man alle Karten zusammen erhalten wir:</p>
    <div style="display:flex;flex-direction:row">
    
  <p style="display:flex;flex-direction: column;float:left;row-gap:10px;margin-left:490px;margin-right:10px">
      
    {{s1sum}}:
    </p>

    <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
    <template v-for='index in (t2+t1)' :key='index'>
       <button >
           1000
       </button>
    </template>
    </div>

    <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
    <template v-for='index in h2+h1' :key='index'>
       <button >
           100
       </button>
    </template>
    </div>

    <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
    <template v-for='index in z2+z1' :key='index'>
       <button >
           10
       </button>
       </template>
    </div>

    <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
    <template v-for='index in e2+e1' :key='index'>
       <button >
           1
       </button>
    </template>
   </div>

    </div>
     
  

   
    


     

   


<!-- schritt 2 
if (s1t!=0) {s1t--;s1res-=1000;}
-->




   


    
</template>


<script>
import Modal from '@/components/Modal.vue'
import Modal1 from '@/components/Verifier.vue'

export default {
    components:{Modal,Modal1},
    data(){
        return{
            
            
            t1:this.random(1,10),
            h1:this.random(1,10),
            z1:this.random(1,10),
            e1:this.random(1,10),
            t2:this.random(1,10),
            h2:this.random(1,10),
            z2:this.random(1,10),
            e2:this.random(1,10),
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
            locked:true
            
            
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
        },
        calc(){
            this.sum1=this.t1*1000+this.h1*100+this.z1*10+this.e1
            this.sum2=this.t2*1000+this.h2*100+this.z2*10+this.e2
        },
        checks1(){
            if (this.s1res==this.s1sum )
                this.s1resultat=true;
            else this.s1resultat=false;
            this.abgabe=true;
            
        }
    }
}
</script>
