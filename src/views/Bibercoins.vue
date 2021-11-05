<template>
  <div >
    <h1>Wir haben folgende {{wert}} Bibercoins gesammelt</h1>
    <h1>Weil wir aber nicht genug platz im Rucksack haben möchten wir mit weniger Münzen auskommen aber immernoch den gleichen Wert an </h1>
    <h1>Münzen haben. Kannst du uns helfen die Coins so auszutauschen, dass wir am schluss so wenig Münzen wie möglich tragen müssen aber den ursprünglichen </h1>
    <h1>Wert behalten? </h1>

    <h1>{{bag}}</h1>
    <h1>{{array}}</h1>
    <h1>{{up}}</h1>

    



    <button v-on:click="reset">
    <h1>RESET</h1>
    </button>

   

    
  </div>
</template>



<script>


export default {
   data(){
       return{
           wert:0,
           rand1:(Math.floor(Math.random() * 4)),
           rand2:(Math.floor(Math.random() * 4)),
           rand4:(Math.floor(Math.random() * 4)),
           rand8:(Math.floor(Math.random() * 4)),
           rand16:(Math.floor(Math.random() * 4)),
           rand32:(Math.floor(Math.random() * 3)),
           rand64:(Math.floor(Math.random() * 2)),
           rand128:(Math.floor(Math.random() * 2)),
           rand256:1,
           bag:[],
           array:new Array(),
           lösung:0
          

       }
   },
    created: function(){
    this.init()
  },

    methods:{

        init(){
            this.bag=[];
            for(let i=0;i<8;i++){
                this.add(i)
            }
           
           
        },
        reset(){
          this.rand1=(Math.floor(Math.random() * 4)),
          this.rand2=(Math.floor(Math.random() * 4)),
           this.rand4=(Math.floor(Math.random() * 4)),
           this.rand8=(Math.floor(Math.random() * 4)),
           this.rand16=(Math.floor(Math.random() * 4)),
           this.rand32=(Math.floor(Math.random() * 3)),
           this.rand64=(Math.floor(Math.random() * 2)),
           this.rand128=(Math.floor(Math.random() * 2)),
          this.init();
        },
        add(power){
          
          
         switch (power) {

          case 0:
            for(let i=0;i<this.rand1;i++){
            this.bag.push(1);
            }
            break;

          case 1:
            for(let i=0;i<this.rand2;i++){
            this.bag.push(2);
            }
            break;

          case 2:
            for(let i=0;i<this.rand4;i++){
            this.bag.push(4);
            }
            break;

          case 3:
            for(let i=0;i<this.rand8;i++){
            this.bag.push(8);
            }
            break;

          case 4:
            for(let i=0;i<this.rand16;i++){
            this.bag.push(16);
            }
            break;

          case 5:
            for(let i=0;i<this.rand32;i++){
            this.bag.push(32);
            }
            break;

          case 6:
            for(let i=0;i<this.rand64;i++){
            this.bag.push(64);
            }
            break;

          case 7:
            for(let i=0;i<this.rand128;i++){
            this.bag.push(128);
            }
            break;

          default:
          //do nothing
          
        }
        
    }

    }
}
</script>
