import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      component: () => import('../pages/Home.vue'),
      path: '/home'
    },
    {
      name: 'About',
      component: () => import('../pages/About.vue'),
      path: '/about'
    }
  ]
})