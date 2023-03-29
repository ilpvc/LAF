import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router"


const constantRoutes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/HomeView.vue'),
        children: [
            {
                path: 'home',
                name: 'index',
                component: () => import('@/views/Index/IndexView.vue'),
            },
            {
                path: 'user',
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

export default router