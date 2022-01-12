<template>
  <div id="nav">
    <router-link to="/">
    <button style="width:6%;border-radius:10px;display:flex;">
    <img src="@/assets/homepage.png"  />
    </button>
    </router-link> 
 
   
    
    
  </div>
  <router-view/>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(60, 202, 245); /*innerer teil */
  
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #050505; /*farbe wenn man auf link ist drauf ist*/
}

body{
  background: rgb(60, 202, 245) /*äusserer  teil*/
}
</style>
