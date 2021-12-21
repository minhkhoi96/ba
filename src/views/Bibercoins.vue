<template>
  
    
<a class="rucksack">
hier ist der rucksack: er hat folgende coins:
<br>

<template v-for='index in rand1' :key='index'>
       
            <img src="@/assets/one.png" style="height:10%;width:10%"/>
       
</template>

<template v-for='index in rand2' :key='index'>
       
            <img src="@/assets/two.png" style="height:10%;width:10%"/>
       
</template>

<template v-for='index in rand4' :key='index'>
       
            <img src="@/assets/four.png" style="height:10%;width:10%"/>
       
       </template>

  <template v-for='index in rand8' :key='index'>
       
            <img src="@/assets/eight.png" style="height:10%;width:10%"/>
       
       </template>
<template v-for='index in rand16' :key='index'>
       
            <img src="@/assets/sixteen.png" style="height:10%;width:10%"/>
       
       </template>

       <template v-for='index in rand32' :key='index'>
       
            <img src="@/assets/thirtytwo.png" style="height:10%;width:10%"/>
       
       </template>

       <template v-for='index in rand64' :key='index'>
       
            <img src="@/assets/sixtyfour.png" style="height:10%;width:10%"/>
       
       </template>

</a>


<a class="maschine">
  hier ist die maschine zum reinziehen, sie nimmt  2 gleiche münzen und spuckt ihre summe als neue summe raus
  </a>


    

  

  
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
           bag1:[],
           length1:0,  
           bag2:[],
           length2:0,
           bag4:[],
           length4:0,
           bag8:[],
           length8:0,
           bag16:[],
           length16:0,
           bag32:[],
           length32:0,
           bag64:[],
           length64:0,  
           lösung:0,
           
           abgabe:false,
           result:0,
           resultat:false

       }
   },
    created: function(){
    this.init()
  },

    methods:{

        init(){
            
           
            for(let i=0;i<7;i++){
                this.add(i)
            }
           
           
        },
        check(){
         

        },
        reset(){
          this.lösung=0,
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
          
            }  this.lösung+=this.rand1*1;
            break;

          case 1:
            for(let i=0;i<this.rand2;i++){
            this.bag.push(2);
            
            }this.lösung+=this.rand2*2;
            break;

          case 2:
            for(let i=0;i<this.rand4;i++){
            this.bag.push(4);
           
            } this.lösung+=this.rand4*4;
            break;

          case 3:
            for(let i=0;i<this.rand8;i++){
            this.bag.push(8);
            
            }this.lösung+=this.rand8*8;
            break;

          case 4:
            for(let i=0;i<this.rand16;i++){
            this.bag.push(16);
             
            }this.lösung+=this.rand16*16;
            break;

          case 5:
            for(let i=0;i<this.rand32;i++){
            this.bag.push(32);
             
            }this.lösung+=this.rand32*32;
            break;

          case 6:
            for(let i=0;i<this.rand64;i++){
            this.bag.push(64);
             
            }this.lösung+=this.rand64*64;
            break;

          case 7:
            this.lösung+=this.rand128*128;
            for(let i=0;i<this.rand128;i++){
            this.bag.push(128);
             
            }
            break;

          default:
          //do nothing
          
        }
        
    },
    add1(){
      this.bag1.push(1);
      this.length1++;
    },
    add2(){
      this.bag2.push(1);
      this.length2++;
    },
    add4(){
      this.bag4.push(1);
      this.length4++;
    },
    add8(){
      this.bag8.push(1);
      this.length8++;
    },
    add16(){
      this.bag16.push(1);
      this.length16++;
    },
    add32(){
      this.bag32.push(1);
      this.length32++;
    },
    add64(){
      this.bag64.push(1);
      this.length64++;
    },

    }
}
</script>


<style scoped>
.rucksack {
  display: inline-block;
  flex-direction: column;
  align-items:center;
    min-height: 300px;
    min-width: 400px;
    border: 1px solid black;
    margin: 0 10px 10px 200px;
    background: white;
    
}
.maschine{
  
  display: inline-block;
  flex-direction: column;
  align-items:center;
    min-height: 200px;
    min-width: 200px;
    border: 1px solid black;
    margin: 0 10px 10px 200px;
    background: white;
    

}
</style>