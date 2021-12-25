import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Binary from '../views/Binary.vue'
import Umwandeln from '../views/Umwandeln.vue'
import Dezimal from '../views/Dezimal.vue'
import AddBin from '../views/AddBin.vue'
import Römisch from '../views/Römisch.vue'
import Gemischtes from '../views/Gemischtes.vue'
import Hex from '../views/Hex.vue'

import Challenge from '../views/Challenge.vue'
import Kartenaddition from '../views/Kartenaddition.vue'
import Greedy from '../views/Greedy.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/greedy',
    name: 'Greedy',
    component: Greedy
  },
  {
    path: '/challenge',
    name: 'Challenge',
    component: Challenge
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
    path: '/roemisch',
    name: 'Römisch',
    component: Römisch
  },
  {
    path: '/drei',
    name: 'Gemischtes',
    component: Gemischtes
  },
  {
    path: '/hex',
    name: 'Hex',
    component: Hex
  },
 
  {
    path: '/addition',
    name: 'Addition',
    component: Kartenaddition
  }


 
  
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
