import router from './router'
import Storage from '@/utils/storage'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    const token = Storage.getItem('token')
    if (token) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
    }
})
