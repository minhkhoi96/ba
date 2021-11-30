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
    <div>
    
    
    <div class="superbox" >
    <p> Schritt 1: Karten zusammen tun</p>
    <div style="display:flex">
    <button v-on:click="reset">-</button> <p>1000 </p> <button>+</button>
    <button>-</button> <p>100 </p> <button>+</button>
    <button>-</button> <p>10 </p> <button>+</button>
    <button>-</button> <p>1</p> <button>+</button>
    </div>
    </div>

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
            sum1:0,
            sum2:0
            
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
            this.calc()
        },
        calc(){
            this.sum1=this.t1*1000+this.h1*100+this.z1*10+this.e1
            this.sum2=this.t2*1000+this.h2*100+this.z2*10+this.e2
        }
    }
}
</script>
