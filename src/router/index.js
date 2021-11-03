import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Binary from '../views/Binary.vue'
import Umwandeln from '../views/Umwandeln.vue'
import Kniffliges from '../views/Kniffliges.vue'
import AddBin from '../views/AddBin.vue'
import Römisch from '../views/Römisch.vue'
import Gemischtes from '../views/Gemischtes.vue'
import Hex from '../views/Hex.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/kniffliges',
    name: 'Kniffliges',
    component: Kniffliges
  },
  {
    path: '/umwandeln',
    name: 'Umwandeln',
    component: Umwandeln
  },
  {
    path: '/binary',
    name: 'Binary',
    component: Binary
  },
  {
    path: '/addBin',
    name: 'AddBin',
    component: AddBin
  },
  {
    path: '/römisch',
    name: 'Römisch',
    component: Römisch
  },
  {
    path: '/mix',
    name: 'Gemischtes',
    component: Gemischtes
  },
  {
    path: '/hex',
    name: 'Hex',
    component: Hex
  }

 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
