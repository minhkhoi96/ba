<template>
<div>
    <h1>Alice hat zuviele Geldscheine in ihrem Portmonä, sie geht nun zur Bank, wo ihr
        Geldscheine im wert von 10,20,50,100,200 und 1000 Franken angeboten werden.
        Kannst du Alice dabei helfen ihre Geldscheine so umzutauschen, dass size
        am Schluss weniger Geldscheine mit sich tragen muss? :3
    </h1>

    <div>
    <button v-on:click="reset">
        reset
    </button>

    <button >
        TAUSCHEN GEGEN 1000
    </button>

    <button >
        TAUSCHEN GEGEN 500
    </button>

   <button >
        TAUSCHEN GEGEN 200
    </button>

    <button >
        TAUSCHEN GEGEN 100
    </button>

    <button >
        TAUSCHEN GEGEN 50
    </button>

    <button >
        TAUSCHEN GEGEN 20
    </button>
    </div>


<div>
    <template v-for='index in rand200' :key='index'>
      
       <button v-on:click="reset">
              <h1>200</h1>
     </button>
       
    </template>
</div>

<div> <p></p>
</div>

    <div>
    <template v-for='index in rand100' :key='index'>
         
       <button >
              <h1>100</h1>
     </button> 
    </template>
    </div>

    <div>
    <template v-for='index in rand50' :key='index'>
       <button >
              <h1>50</h1>
     </button>
    </template>
    </div>

    <div>
    <template v-for='index in rand20' :key='index'>
       <button >
              <h1>20</h1>
     </button>
    </template>
    </div>

    <div>
    <template v-for='index in rand10' :key='index'>
       <button >
              <h1>10</h1>
     </button>
    </template>
    </div>

  
<button>
    <p>hssi</p>
</button>

</div>

</template>



<script>


export default {
    data(){
        return{
            
            liste10:[],
            liste20:[],
            liste50:[],
            liste100:[],
            liste200:[],
            liste1000:[],
            rand5:Math.floor(Math.random() * (20 - 5) + 5),  //Math.random() * (max - min) + min;
            rand10:Math.floor(Math.random() * (20 - 5) + 5),
            rand20:Math.floor(Math.random() * (20 - 5) + 5),
            rand50:Math.floor(Math.random() * (20 - 5) + 5),
            rand100:Math.floor(Math.random() * (20 - 5) + 5),
            rand200:Math.floor(Math.random() * (20 - 5) + 5)
            
        }
    },
    created: function(){
    this.init()
    },

    methods:{
        init(){
              //Math.random() * (max - min) + min;
            this.rand10=Math.floor(Math.random() * (20 - 5) + 5);
            this.rand20=Math.floor(Math.random() * (20 - 5) + 5);
            this.rand50=Math.floor(Math.random() * (20 - 5) + 5);
            this.rand100=Math.floor(Math.random() * (20 - 5) + 5);
            this.rand200=Math.floor(Math.random() * (20 - 5) + 5);
            
            for(let i=0;i<5;i++){
                this.add(i)
            }

        },
            reset(){
                this.init()
            },
            add(number){
          
          
             switch (number) {

          case 0:
            for(let i=0;i<this.rand10;i++){
            this.liste10.push(1);
          
            }  
            break;

          case 1:
            for(let i=0;i<this.rand20;i++){
            this.liste20.push(1)
            
            }
            break;

          case 2:
            for(let i=0;i<this.rand50;i++){
            this.liste50.push(1);
           
            } 
            break;

          case 3:
            for(let i=0;i<this.rand100;i++){
            this.liste100.push(1);
            
            }
            break;

          case 4:
            for(let i=0;i<this.rand200;i++){
            this.liste200.push(1);
             
            }
            break;

          

          default:
          //do nothing
          
        }
        }
    }
}

</script>
