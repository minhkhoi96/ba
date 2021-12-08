<template>
    <p>Alice hat heute in der Schule die dezimale Kartendarstellung gelernt
        und möchte dies zu Hause mit ihren Karten üben.
        Dazu hat Sie zwei Zahlen in die Kartendarstellung gebracht.
        Um diese zu addieren tut Sie in einem ersten Schritt alle Karten zusammen.
        Im zweiten Schritt tauscht sie nun ihre Karten so lange um, bis Sie
        am Schluss die korrekte Kartendarstellung für die Summe hat.
        Kannst du ihr dabei helfen?
    </p>

   <div style="float:left">
    <p>
        
    {{sum1}}:
    </p>

    <div>
    <template v-for='index in t1' :key='index' >
       <button >
           1000
       </button>
    </template>
    </div>
    <div>
    <template v-for='index in h1' :key='index'>
       <button >
           100
       </button>
    </template>
    </div>
    <div>
    <template v-for='index in z1' :key='index'>
       <button >
           10
       </button>
       </template>
    </div>

    <div>
    <template v-for='index in e1' :key='index'>
       <button >
           1
       </button>
    </template>
   </div>
   </div>
    

    <div style="float:left">
    <p>
    {{sum2}}:
    </p>

    <div>
    <template v-for='index in t2' :key='index'>
       <button >
           1000
       </button>
    </template>
    </div>
    <div>
    <template v-for='index in h2' :key='index'>
       <button >
           100
       </button>
    </template>
    </div>
    <div>
    <template v-for='index in z2' :key='index'>
       <button >
           10
       </button>
       </template>
    </div>

    <div>
    <template v-for='index in e2' :key='index'>
       <button >
           1
       </button>
    </template>
   </div>

    </div>
    <h1>   </h1>
    <h1>   </h1>
    <h1>   </h1>
    <h1>   </h1>
    
    
    

 
     


    <div class="superbox" >
     <div style="display:flex">   
    <p> Schritt 1: Karten zusammen tun</p>
   
    <button v-on:click="if (s1t!=0) {s1t--;s1res-=1000;}">-</button> <p>1000 </p> <button v-on:click="s1t++;s1res+=1000">+</button>
    <button v-on:click="if (s1h!=0) {s1t--;s1res-=100;}">-</button> <p>100 </p> <button v-on:click="s1h++;s1res+=100">+</button>
    <button v-on:click="if (s1z!=0) {s1t--;s1res-=10;}">-</button> <p>10 </p> <button v-on:click="s1z++;s1res+=10">+</button>
    <button v-on:click="if (s1e!=0) {s1t--;s1res-=1;}">-</button> <p>1</p> <button v-on:click="s1e++;s1res+=1">+</button>
    </div>

    <!-- wir drucken schritt1 aus-->
    <div style="display:flex;;flex-direction: column;">
   <!-- <div>
      <template v-for='index in s1zt' :key='index'>
       <button  v-on:click="s1zt--">
           10000
       </button>
       </template>
    </div>
     <button v-on:click=" s1zt--">-</button> <p>10000 </p> <button v-on:click="s1zt++">+</button>-->

     <div>
      <template v-for='index in s1zt' :key='index'>
       <button>
           10000
       </button>
       </template>
    </div>

    <div>
      <template v-for='index in s1t' :key='index'>
       <button  v-on:click="s1t--;s1res-=1000">
           1000
       </button>
       </template>
    </div>
    <div>
       <template v-for='index in s1h' :key='index'>
       <button  v-on:click="s1h--;s1res-=100">
           100
       </button>
       </template>
       </div>
<div>
       <template v-for='index in s1z' :key='index'>
       <button v-on:click="s1z--;s1res-=10" >
           10
       </button>
       </template>
       </div>
<div>
       <template v-for='index in s1e' :key='index'>
       <button  v-on:click="s1e--;s1res-=1">
           1
       </button>
       </template>
</div>
    </div>
      <!-- wir drucken schritt1 aus-->
      <div>
      <button >
    <h1>BEISPIEL</h1>
    </button>
<button v-on:click="checks1">
 Schritt 1 prüfen
 
<h1 v-if="s1resultat&&abgabe"> Your aweee</h1>
 <h1 v-else-if="abgabe"> Nope</h1>
</button>
      </div>
<p>{{s1sum}}</p>
    </div> 


<!-- schritt 2 
if (s1t!=0) {s1t--;s1res-=1000;}
-->

<div>
     <h1> 
         
    </h1>
    <h1> Schritt 2 </h1>
    <p> nun tauschen wir solange karten aus, bis wir eine korrekte Kartendarstellung </p>

    <button v-on:click="if(s1t>9){s1t-=10;s1zt++;}">
        10 tausender gegen 1 zehntausend
    </button>

    <button v-on:click="if(s1h>9){s1h-=10;s1t++;}">
        10 hunderter gegen 1 tausend
    </button>

    <button v-on:click="if(s1z>10){s1z-=10;s1h++;}">
        10 zehner gegen 1 hunderter
    </button>

    <button v-on:click="if(s1e>9){s1e-=10;s1z++;}">
        10 einer gegen 1 zehner
    </button>

    <button v-on:click="abgabe2=true" >
         Schritt 2 prüfen
 
        <h1 v-if="s1t<10&&s1h<10&&s1t<10&&s1e<10&&abgabe2&&s1resultat"> Your aweee</h1>
        <h1 v-else-if="abgabe2"> Nope</h1>
    </button>

    <button >
    <h1>BEISPIEL</h1>
    </button>
   
    



   
</div>

    
</template>


<script>


export default {
    data(){
        return{
            
            val2:this.random(0,10),
            t1:this.random(0,10),
            h1:this.random(0,10),
            z1:this.random(0,10),
            e1:this.random(0,10),
            t2:this.random(0,10),
            h2:this.random(0,10),
            z2:this.random(0,10),
            e2:this.random(0,10),
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
