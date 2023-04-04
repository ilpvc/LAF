import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router"
import {getToken} from "@/utils/auth.ts";


const constantRoutes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/HomeView.vue'),
        meta: {
            isAuth: true
        },
        children: [
            {
                path: 'home',
                name: 'index',
                component: () => import('@/views/Index/IndexView.vue'),
                meta: {
                    isAuth: false
                },
            },
            {
                path: 'user/:name?',
                name: 'user',
                component: () => import('@/views/UserDetails/UserDetails.vue')
            },
            {
                path: 'setting',
                name: 'setting',
                component: () => import('@/views/Setting/Setting.vue')
            },
            {
                path: 'lost',
                name: 'lost',
                component: () => import('@/views/LostObject/LostObject.vue')
            },
            {
                path: 'find',
                name: 'find',
                component: () => import('@/views/FindObject/FindObject.vue')
            },
            {
                path: 'lobby',
                name: 'lobby',
                component: () => import('@/views/Lobby/Lobby.vue')
            },
            {
                path: 'notice',
                name: 'notice',
                component: () => import('@/views/NoticeMessage/NoticeMessage.vue')
            },
        ]
    },
    {
        path: "/login",
        name: 'login',
        component: () => import('@/views/LoginAndRegister/Login.vue')
    }

]

const router = createRouter({
    routes: constantRoutes,
    history: createWebHashHistory(),
})

router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (getToken() !== undefined) {
            next();
        } else {
            alert("你还没有登录或者登录信息过期，请重新登录")
            router.push({
                path: '/login',
            })
        }
    } else {
        next()
    }
})
export default router