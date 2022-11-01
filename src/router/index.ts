import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import useStore from '@/store';

export const Layout = () => import('@/layout/index.vue');
// 参数说明: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
// 静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/pageHome',
    component: () => import('../views/homePage.vue'),
    meta: {
      hidden: true
    },
    children: [
      {
        path: '/home',
        component: () => import('../views/home.vue'),
        meta: {
          hidden: true
        }
      },
      {
        path: '/textera',
        component: () => import('../views/textera.vue'),
        meta: {
          hidden: true
        }
      }
    ]
  },
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },

  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { hidden: true }
  },

  {
    path: '/register',
    component: () => import('@/views/login/register.vue'),
    meta: { hidden: true }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'homepage', affix: true }
      },
      {
        path: '401',
        component: () => import('@/views/error-page/401.vue'),
        meta: { hidden: true }
      }
    ]
  },
  {
    path: '/:path(.*)',
    component: () => import('@/views/error-page/404.vue'),
    meta: { hidden: true }
  }
];

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 })
});

// 重置路由
export function resetRouter() {
  const { permission } = useStore();
  permission.routes.forEach(route => {
    const name = route.name;
    if (name && router.hasRoute(name)) {
      router.removeRoute(name);
    }
  });
}

export default router;
