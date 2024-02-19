import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Q1 from '../views/Q1View.vue'
import ans1 from '../views/Ans1View.vue'
import Q2 from '../views/Q2View.vue'
import ans2 from '../views/Ans2View.vue'
import Q3 from '../views/Q3View.vue'
import ans3 from '../views/Ans3View.vue'
import Q4 from '../views/Q4View.vue'
import ans4 from '../views/Ans4View.vue'
import Q5 from '../views/Q5View.vue'
import ans5 from '../views/Ans5View.vue'
import Q6 from '../views/Q6View.vue'
import ans6 from '../views/Ans6View.vue'
import end from '../views/endView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/q1',
    name: 'q1',
    component: Q1
  },
  {
    path: '/ans1',
    name: 'ans1',
    component: ans1
  },
  {
    path: '/q2',
    name: 'q2',
    component: Q2
  },
  {
    path: '/ans2',
    name: 'ans2',
    component: ans2
  },
  {
    path: '/q3',
    name: 'q3',
    component: Q3
  },
  {
    path: '/ans3',
    name: 'ans3',
    component: ans3
  },
  {
    path: '/q4',
    name: 'q4',
    component: Q4
  },
  {
    path: '/ans4',
    name: 'ans4',
    component: ans4
  },
  {
    path: '/q5',
    name: 'q5',
    component: Q5
  },
  {
    path: '/ans5',
    name: 'ans5',
    component: ans5
  },
  {
    path: '/q6',
    name: 'q6',
    component: Q6
  },
  {
    path: '/ans6',
    name: 'ans6',
    component: ans6
  },
  {
    path: '/end',
    name: 'end',
    component: end
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
