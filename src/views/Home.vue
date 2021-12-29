<template>

 
  <div >
      <h2>Hallo hier findest du aufgaben zum buch Einfach Informatik 7-8 ZUM KAPITEL DARSTELLUNG VON ZAHLEN </h2>
      <img src="@/assets/start.png" style="height:20%;width:30%;"/>
  </div>


  <router-link to="/umwandeln">
  <div class="box">
    Kartendarstellung
    <div>
      <img src="@/assets/cards.png" style="height:50%;width:50%;margin-top:30px;" />
    </div>
    <div>
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
    </div>
  </div>
  </router-link>



  <router-link to="/addition">
  <div class="box">
    Kartenaddition
    <div>
      <img src="@/assets/cards.png" style="height:50%;width:50%;margin-top:30px;" />
    </div>
    <div>
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
    </div>
  </div>
  </router-link>




  <router-link to="/greedy">
  <div class="box">
    Binäre Zahlendarstellung
    <img src="@/assets/binaryf.png" style="width:95%;height:60%">
    <div>
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
    </div>
  </div>
  </router-link>


  <router-link to="/binary">
  <div class="box">
    Binäre Zahlend interpretieren
    <img src="@/assets/reverse.png" style="width:89%;height:60%">
    <div>
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
       <img src="@/assets/biber.png" style="height:8%;width:8%;" />
    </div>
  </div>
  </router-link>


  <router-link to="/roemisch">
  <div class="box">
    Vorrömische Zahlen lesen
    <img src="@/assets/roman2.png" style="width:86%;height:60%">
    <div>
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
       <img src="@/assets/biber.png" style="height:8%;width:8%;" />
    </div>
  </div>
  </router-link>

   <router-link to="/addBin">
  <div class="box">
    Vorrömische Zahlen lesen
    <img src="@/assets/add.png" style="width:72%;height:60%">
    <div>
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
       <img src="@/assets/biber.png" style="height:8%;width:8%;" />
    </div>
  </div>
  </router-link>
   

  <router-link to="/Hex">
  <div class="box">
    hexadezimale Zahlen lesen
    <img src="@/assets/hexa.png" style="width:50%;height:60%">
    <div>
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
       <img src="@/assets/biber.png" style="height:8%;width:8%;" />
    </div>
  </div>
  </router-link>


  <router-link to="/dezimal">
  <div class="box">
    Dezimal zu Binär
    <img src="@/assets/binaryf.png" style="width:95%;height:60%">
    <div>
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
       <img src="@/assets/biber.png" style="height:8%;width:8%;" />
    </div>
  </div>
  </router-link>

   
<router-link to="/drei">
  <div class="box">
    3-adische Darstellung lesen
    <img src="@/assets/tri.png" style="width:44%;height:60%">
    <div>
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
       <img src="@/assets/biber.png" style="height:8%;width:8%;" />
    </div>
  </div>
  </router-link>

  

  <router-link to="/challenge">
  <div class="box" >
    Münzen tauschen
    <div>
      <img src="@/assets/coinss.png" style="width:50%;"> <br>
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
    </div>
  </div>
  </router-link>


  

 <div class="box">
    <router-link to="/test">Vorschau</router-link>
     
  </div>
  
  


  
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
   height: auto;
   text-align: center;
   background: rgb(248, 161, 62);
   margin: 20px;
   display: inline-block;
   border-radius: 10px ;
   

 }
</style>
