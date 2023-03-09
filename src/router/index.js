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
                component: ()=>import('@/views/Index/IndexView.vue')
            }
        ]
    }
]

const router = createRouter({
    routes: constantRoutes,
    history: createWebHashHistory(),
})

export default router