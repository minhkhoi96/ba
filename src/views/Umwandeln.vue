<template>
 
    <h1>Stelle die folgende Zahl mit den folgenden Karten dar:</h1>
    
  <button v-on:click="check">
  <h1 style="color:green;background:red">ABGEBEN</h1>
  <h1 v-if="resultat&&abgabe"> Your aweee</h1>
 <h1 v-else-if="abgabe"> Nope</h1>
  </button>

  <button  v-on:click="reset">
  
<h1>RESET</h1>
  </button>

   <button  v-on:click="reset">
  
<h1>NEXT</h1>
  </button>


    <h1>{{val}}</h1>
<button v-on:click="addtausend">1000</button>

 <button v-on:click="addhundert">100</button>
 <button v-on:click="addzehn">10</button>
 <button v-on:click="eins">1</button>
 
 
  <!--
  <button v-on:click="addtausend">
    <img src="@/assets/logo.png" style="width:50px;height:60px;">
  </button>
  -->
       <h1></h1>
    
  <!--
   WE PRINT ALLL OUR TAUSENDER
 -->
<div v-for='index in lengthT' :key='index'>
              <button v-on:click="array[0].pop();lengthT--;curr-=1000;abgabe=false" style="float:left" >
              <!--<img src="@/assets/logo.png" style="width:150px;height:150px;float:left" /> -->
              <h1>1000</h1>
              </button>
            </div>
 

   <!--
   WE PRINT ALLL OUR Hunderter
 -->
<div v-for='index in lengthH' :key='index'>
              <button v-on:click="array[1].pop();lengthH--;curr-=100;abgabe=false" style="float:left" >
              <!--<img src="@/assets/logo.png" style="width:100px;height:100px;float:left" />-->
              <h1>100</h1>
              </button>
            </div>

<div v-for='index in lengthZ' :key='index'>
              <button v-on:click="array[2].pop();lengthZ--;curr-=10;abgabe=false" style="float:left">
              <h1>10</h1>
              </button>
            </div>

<div v-for='index in lengthE' :key='index'>
              <button v-on:click="array[3].pop();lengthE--;curr-=1;abgabe=false" style="float:left">
              
              <h1>1</h1>
              </button>
            </div>
 
 <h1></h1>



</template>


<script>

export default {

  data(){
    return{
      val: Math.floor(Math.random() * 9999) + 1,
      lengthT: 0,
      lengthH: 0,
      lengthZ: 0,
      lengthE: 0,
      array: [],
      curr: 0,
      resultat: false,
      abgabe:false
    }
  },
  created: function(){
    this.initArr()
  },
  methods : {
    randomNumber (){
      this.val =  Math.floor(Math.random() * 9999) + 1;
      
    },
    check(){
      this.abgabe=true
      if (this.val==this.curr)
        this.resultat = true
      else 
        this.resultat = false
    },
    popup(){
      
    },
    addtausend (){
      if(this.lengthT==9)
        popup()
      else {
        this.array[0].push(1)
        this.lengthT++
        this.curr+=1000
      }
    },
    addhundert (){
      if(this.lengthH==9)
        popup()
      else {
     this.array[1].push(1)
     this.lengthH++
     this.curr+=100
      }
    },
    addzehn (){
      if(this.lengthZ==9)
        popup()
      else{
     this.array[2].push(1)
     this.lengthZ++
     this.curr+=10
      }
    },
    eins (){
       if(this.lengthE==9)
        popup()
        else{
     this.array[3].push(1)
     this.lengthE++
     this.curr+=1
        }
    },
    initArr(){
      this.array.push([])
      this.array.push([])
      this.array.push([])
      this.array.push([])
      console.log(this.array)

    },
    reset(){
this.val= Math.floor(Math.random() * 9999) + 1,
      this.lengthT= 0
      this.lengthH= 0
      this.lengthZ= 0
      this.lengthE= 0
      this.array= []
      this.curr= 0
      this.resultat= false
      this.abgabe=false
      this.initArr()
    }
  }
  

  }
 


</script>

<style scoped>
.cards {                     /*cards to pull*/
   padding: 150px 10;
   width: 600px;
   text-align: left;
   background: white;
   margin: 20px;
   display: inline-block
   

 }
</style>