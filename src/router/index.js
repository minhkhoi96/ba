import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Binary from '../views/Binary.vue'
import Umwandeln from '../views/Umwandeln.vue'
import Dezimal from '../views/Dezimal.vue'
import AddBin from '../views/AddBin.vue'
import Römisch from '../views/Römisch.vue'
import Gemischtes from '../views/Gemischtes.vue'
import Hex from '../views/Hex.vue'
import Biber from '../views/Bibercoins.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/coins',
    name: 'Coins',
    component: Biber
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/dezimal',
    name: 'Dezimal',
    component: Dezimal
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
