import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router"


const constantRoutes = [
    {
        path: '/',
        name: 'home',
        component: ()=> import('@/views/Home/HomeView.vue'),
        children: [
            {
                path: 'home',
                name: 'index',
                component: ()=>import('@/views/Index/IndexView.vue'),
            },
            {
                path: 'user',
                name: 'user',
                component: ()=>import('@/views/UserDetails/UserDetails.vue')
            },
            {
                path: 'setting',
                name: 'setting',
                component: ()=>import('@/views/Setting/Setting.vue')
            }
        ]
    }
]

const router = createRouter({
    routes: constantRoutes,
    history: createWebHashHistory(),
})

export default router