import { createRouter, createWebHistory } from 'vue-router'

import routesJournal from "@/modules/daybook/routes"

const routes = [
 {
  name:'journaly',
  ...routesJournal

 } ,
{
  name:'notfound',
  path: '/:catchAll(.*)',
  component: import(/* webpackChunkName: "Not_Foundjournal:journalStore" */ '@/views/NotFound.vue')
} 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
