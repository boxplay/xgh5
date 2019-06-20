import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/admin/components/Backend'
import Web from '@/index/components/Index'
import Mob from '@/mob/components/Mob'
import Webadmin from '@/admin/components/Backend2'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'Web',
      component: Web
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/mob',
      name: 'Mob',
      component: Mob
    },
    {
      path: '/webadmin',
      name: 'Webadmin',
      component: Webadmin
    }
  ]
})
