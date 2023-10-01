import { createRouter, createWebHistory } from 'vue-router'

import routesJournal from "@/modules/daybook/routes"

const routes = [
 {
  name:'journaly',
  ...routesJournal

 } ,
 {
  name:"not_found",
    path: '/notfound',
    component: import(/* webpackChunkName: "Not_Foundjournal:journalStore" */ '@/views/NotFound.vue')

  }
 ,
  {
    name:'notfound_default',
    path: '/:catchAll(.*)',
    redirect:{name:'not_found'}
    
  } 
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
