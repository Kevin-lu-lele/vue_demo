/**
 * 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
// 声明插件
Vue.use(VueRouter)
export default new VueRouter({
    // 配置所有路由
    routes: [
        {
            path:'/msite',
            component: MSite,
            meta:{
                showFoot: true
            }
        },
        {
            path:'/order',
            component: Order,
            meta:{
                showFoot: true
            }
        },
        {
            path:'/profile',
            component: Profile,
            meta:{
                showFoot: true
            }
        },
        {
            path:'/search',
            component: Search,
            meta:{
                showFoot: true
            }
        },
        {
            path:'/',
            redirect: '/msite'
        },
        {
            path:'/login',
            component: Login
        }
    ]
})