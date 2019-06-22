// import Admin from '@/admin/components/Backend'
// import Web from '@/index/components/Index'
// import Mob from '@/mob/components/Mob'
// import Webadmin from '@/admin/components/Backend2'
const Admin = () => import('@/admin/components/Backend')
const Web = () => import('@/index/components/Index')
const Mob = () => import('@/mob/components/Mob')
const Webadmin = () => import('@/admin/components/Backend2')
export default new VueRouter({
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
