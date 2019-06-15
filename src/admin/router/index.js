import Vue from 'vue'
import Router from 'vue-router'
import Backend from '@/admin/components/Backend'
import Backend2 from '@/admin/components/Backend2'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'Backend',
      component: Backend
    },
		{
		  path: '/web',
		  name: 'Backend2',
		  component: Backend2
		}
  ]
})
