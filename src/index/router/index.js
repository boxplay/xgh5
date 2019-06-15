import Vue from 'vue'
import Router from 'vue-router'
import Web from '@/index/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Web',
      component: Web
    }
  ]
})
