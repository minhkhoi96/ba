<template>
  <div class="home">
    <h2>HALLO HIER FINDEST DU AUFGABEN ZU EINFACH INFORMATIK 7-8 ZUM KAPITEL DARSTELLUNG VON ZAHLEN :3</h2>
    
  </div>
  <div class="box">
    <router-link to="/umwandeln">Kartendarstellung</router-link>
     <img src="@/assets/one.png"  />
  </div>

   <div class="box">
    <router-link to="/binary">Binaere Zahlen interpretieren</router-link>
     <img src="@/assets/one.png"  />
  </div>

<div class="box">
    <router-link to="/römisch">Vorrömische Zahlen lesen</router-link>
     <img src="@/assets/one.png"  />
  </div>
  

   <div class="box">
    <router-link to="/addBin">Binäre Zahlen addieren</router-link>
     <img src="@/assets/two.png"  />
  </div>

   <router-link to="/Hex">
   <div class="box">
       <img src="@/assets/one.png"  />
    hexadezimale Zahlen lesen
  </div>
  </router-link>

   <div class="box">
    <router-link to="/dezimal">Dezimal zu Binär</router-link>
     <img src="@/assets/two.png"  />
  </div>

  <div class="box">
    <router-link to="/MIX">3-adische Darstellung lesen</router-link>
     <img src="@/assets/one.png"  />
  </div>

  <div class="box">
    <router-link to="/coins">Bibercoins optimieren</router-link>
    <img src="@/assets/four.png"  />
  </div>

  <div class="box">
    <router-link to="/wechseln">Münzen Tauschen</router-link>
    <img src="@/assets/two.png"  />
  </div>


  <div class="box">
    <router-link to="/challenge">Challenge</router-link>
    <img src="@/assets/four.png"  />
  </div>
  

 <h2>hiho</h2>
  
</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
  
</script>

<style>
 #Home{
   background: rgba(43, 33, 33, 0.137);
 }

 .box {
   padding: 50px 0;
   width: 300px;
   text-align: center;
   background: #ddd;
   margin: 20px;
   display: inline-block
   

 }
</style>
