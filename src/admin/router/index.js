import Vue from 'vue'
import Router from 'vue-router'
import Backend from '@/components/Backend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Backend',
      component: Backend
    },
		{
		  path: '/index',
		  redirect:'web'
		}
  ]
})
