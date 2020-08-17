import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout/index'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		component: () => import('@/views/login/index'),
		name: 'login',
		meta: { title: '登录', noCache: true }
	},
	{
		path: '',
		component: layout,
		redirect: 'air-ticket',
		name: 'layout',
		children: [
			{
				path: '/air-ticket',
				component: () => import('@/views/air-ticket/index'),
				name: 'airTicket',
				meta: { title: '机票', noCache: true }
			},
			{
				path: '/task',
				component: () => import('@/views/task/index'),
				name: 'task',
				meta: { title: '任务', noCache: true }
			},
			{
				path: '/contract',
				component: () => import('@/views/contract/index'),
				name: 'contract',
				meta: { title: '合约', noCache: true }
			},
			{
				path: '/person',
				component: () => import('@/views/person/index'),
				name: 'person',
				meta: { title: '个人', noCache: true }
			},
			{
				path: '/account',
				component: () => import('@/views/account/index'),
				name: 'account',
				meta: { title: '账户', noCache: true }
			}
		]
	},
	{
		path: '*',
		component: () => import('@/views/error-page/index'),
		name: 'errorPage',
		meta: { title: 'errorPage', noCache: true }
	}
]

const router = new VueRouter({
	routes
})

export default router
