<template>

 
  <div >
      <h1>Einfach Informatik 7. bis 9. Klasse</h1>
      <h2>Übungen rund um Zahlendarstellungen </h2>
      <img src="@/assets/start.png" style="height:25%;width:25%;"/>
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
      
    </div>
  </div>
  </router-link>




  <router-link to="/greedy">
  <div class="box">
    Binäre Stellendarstellung
    <img src="@/assets/binaryf.png" style="width:95%;height:60%">
    <div>
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
    </div>
  </div>
  </router-link>


  <router-link to="/binary">
  <div class="box">
    Binäre Zahlen lesen
    <img src="@/assets/reverse.png" style="width:89%;height:60%">
    <div>
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
       <img src="@/assets/biber.png" style="height:8%;width:8%;" />
    </div>
  </div>
  </router-link>


 

   <router-link to="/addBin">
  <div class="box">
    Binäre Zahlen addieren
    <img src="@/assets/add.png" style="width:72%;height:60%">
    <div>
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
       <img src="@/assets/biber.png" style="height:8%;width:8%;" />
    </div>
  </div>
  </router-link>


  <router-link to="/dezimal">
  <div class="box">
    Dezimalzahl in Binärzahl umwandeln
    <img src="@/assets/binaryf.png" style="width:95%;height:60%">
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


  <router-link to="/Hex">
  <div class="box">
    Hexadezimale Zahlen lesen
    <img src="@/assets/hexa.png" style="width:50%;height:60%">
    <div>
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
       <img src="@/assets/biber.png" style="height:8%;width:8%;" />
       <img src="@/assets/biber.png" style="height:8%;width:8%;" />
    </div>
  </div>
  </router-link>


  

   
<router-link to="/drei">
  <div class="box">
    3-adische Zahlen lesen
    <img src="@/assets/tri.png" style="width:44%;height:60%">
    <div>
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
       <img src="@/assets/biber.png" style="height:8%;width:8%;" />
    </div>
  </div>
  </router-link>

  
    <!--
  <router-link to="/challenge">
  <div class="box" >
    Münzen optimieren
    <div>
      <img src="@/assets/munz.png" style="width:44%;">
    <br>
      <img src="@/assets/biber.png" style="height:8%;width:8%;" />
      
    </div>
  </div>
  </router-link>

-->
  
<!--
 <div class="box">
    <router-link to="/test">Vorschau</router-link>
     
  </div>
  
  -->


  
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

 .box  {
   padding: 50px 0;
   width: 275px;
   height: auto;
   text-align: center;
   background: rgb(248, 161, 62);
   margin: 40px;
   border-style:solid;
   display: inline-block;
   border-radius: 10px ;
   
 }
 
</style>
