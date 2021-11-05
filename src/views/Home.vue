<template>
  <div class="home">
    <h2>Viel Spass mit den Rätsel zu "einfache Informatik 7-8" :)))))</h2>
    
  </div>
  <div class="box">
    <router-link to="/umwandeln">Kartendarstellung</router-link>
  </div>

   <div class="box">
    <router-link to="/binary">Binaere Zahlen interpretieren</router-link>
  </div>

<div class="box">
    <router-link to="/römisch">Vorrömische Zahlen lesen</router-link>
  </div>
  

   <div class="box">
    <router-link to="/addBin">Binäre Zahlen addieren</router-link>
  </div>

   <div class="box">
    <router-link to="/Hex">hexadezimale Zahlen lesen</router-link>
  </div>

   <div class="box">
    <router-link to="/kniffliges">Kniffliges</router-link>
  </div>

  <div class="box">
    <router-link to="/MIX">Lass mischen</router-link>
  </div>

  <div class="box">
    <router-link to="/coins">Bibercoins optimieren</router-link>
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
   background: green;
 }

 .box {
   padding: 100px 0;
   width: 400px;
   text-align: center;
   background: #ddd;
   margin: 20px;
   display: inline-block
   

 }
</style>
