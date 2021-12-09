<template>
  <div >
    <h1>Wir haben folgende {{wert}} Bibercoins gesammelt</h1>
    <h1>Weil wir aber nicht genug platz im Rucksack haben möchten wir mit weniger Münzen auskommen aber immernoch den gleichen Wert an </h1>
    <h1>Münzen haben. Kannst du uns helfen die Coins so auszutauschen, dass wir am schluss so wenig Münzen wie möglich tragen müssen aber den ursprünglichen </h1>
    <h1>Wert behalten? </h1>

    <h1>{{bag}}</h1>
   
    <h1>{{lösung}}</h1>

    

    <!--<button v-on:click=" ">1000</button>  -->
    <button v-on:click="add1();result++"> 
      <img src="@/assets/one.png"  />
    </button>

    <button v-on:click="add2();result+=2"> 
      <img src="@/assets/two.png"  />
    </button>

    <button v-on:click="add4();result+=4"> 
      <img src="@/assets/four.png"  />
    </button>

    <button v-on:click="add8();result+=8"> 
      <img src="@/assets/eight.png"  />
    </button>

    <button v-on:click="add16();result+=16"> 
      <img src="@/assets/sixteen.png"  />
    </button>

    <button v-on:click="add32();result+=32"> 
      <img src="@/assets/thirtytwo.png"  />
    </button>

    <button v-on:click="add64();result+=64"> 
      <img src="@/assets/sixtyfour.png"  />
    </button>
   
<div>
    <button v-on:click="check">
    <h1>abgeben</h1>
    <h1 v-if="resultat&&abgabe"> richtig</h1>
 <h1 v-else-if="abgabe"> Nope</h1>
  </button>

    <button v-on:click="reset">
    <h1>RESET</h1>
    </button>
    <button >
    <h1>BEISPIEL</h1>
    </button>
</div>

    <div v-for='index in length1' :key='index'>
       <button v-on:click="bag1.pop();length1--;result--" style="float:left">
              <img src="@/assets/one.png" style="width:100px;height:100px;float:left" />
              </button>
    </div>

    <div v-for='index in length2' :key='index'>
       <button v-on:click="bag2.pop();length2--;result-=2" style="float:left">
              <img src="@/assets/two.png" style="width:100px;height:100px;float:left" />
              </button>
    </div>

    <div v-for='index in length4' :key='index'>
       <button v-on:click="bag4.pop();length4--;result-=4" style="float:left">
              <img src="@/assets/four.png" style="width:100px;height:100px;float:left" />
              </button>
    </div>

    <div v-for='index in length8' :key='index'>
       <button v-on:click="bag8.pop();length8--;result-=8" style="float:left">
              <img src="@/assets/eight.png" style="width:100px;height:100px;float:left" />
              </button>
    </div>

    <div v-for='index in length16' :key='index'>
       <button v-on:click="bag16.pop();length16--;result-=16" style="float:left">
              <img src="@/assets/sixteen.png" style="width:100px;height:100px;float:left" />
              </button>
    </div>

    <div v-for='index in length32' :key='index'>
       <button v-on:click="bag32.pop();length32--;result-=32" style="float:left">
              <img src="@/assets/thirtytwo.png" style="width:100px;height:100px;float:left" />
              </button>
    </div>

    <div v-for='index in length64' :key='index'>
       <button v-on:click="bag64.pop();length64--;result-=64" style="float:left">
              <img src="@/assets/sixtyfour.png" style="width:100px;height:100px;float:left" />
              </button>
    </div>
   

    
  </div>

  <h2>hiho</h2>
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
            this.bag=[];
            this.bag1=[];
            this.length1=0;
            this.bag2=[];
            this.length2=0;
            this.bag4=[];
            this.length4=0;
            this.bag8=[];
            this.length8=0;
            this.bag16=[];
            this.length16=0;
            this.bag32=[];
            this.length32=0;
            this.bag64=[];
            this.length64=0;
            this.result=0;
            this.resultat=false;
            this.abgabe=false;
            for(let i=0;i<7;i++){
                this.add(i)
            }
           
           
        },
        check(){
          if(this.lösung==this.result&&this.length1<=1&&this.length2<=1&&this.length4<=1&&this.length8<=1&&this.length16<=1
          &&this.length32<=1&&this.length64<=1)
            this.resultat=true
          else 
            this.resultat=false
          this.abgabe=true

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
