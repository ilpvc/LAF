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
        path: 'search/s=:info?',
        name: 'search',
        component: () => import('@/views/SearchDetail/SearchDetail.vue'),
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
        path: 'notice',
        name: 'notice',
        component: () => import('@/views/NoticeMessage/NoticeMessage.vue')
      },
      {
        path: 'write',
        name: 'write',
        component: () => import('@/views/WritePost/WritePost.vue')
      },
      {
        path: 'learn',
        name: 'learn',
        component: () => import('@/views/Learn/Learn.vue')
      },
      {
        path: 'mall',
        name: 'mall',
        component: () => import('@/views/Mall/Mall.vue')
      },
      {
        path: 'related',
        name: 'related',
        component: () => import('@/views/UserRelated/index.vue'),
        children: [
          {
            path: 'attention',
            name: 'attention',
            component: () => import('@/views/UserRelated/views/Attention.vue')
          },
          {
            path: 'blacklist',
            name: 'blacklist',
            component: () => import('@/views/UserRelated/views/Blacklist.vue')
          },
          {
            path: 'message',
            name: 'message',
            component: () => import('@/views/UserRelated/views/Message.vue')
          }
        ]
      }
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
      if (confirm("你还没有登录或者登录信息过期，请重新登录")) {
        router.push({
          path: '/login',
        })
      }

    }
  } else {
    next()
  }
})
export default router