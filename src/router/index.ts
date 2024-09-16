// @ts-nocheck
import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw, createWebHashHistory } from "vue-router";
import EmptyRouterView from './EmptyRouterView.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'app',
    redirect: { name: 'home' },
     // redirect: { name: 'designs' },
    // redirect: { name: 'editor' },
    component: EmptyRouterView,
  },
  { path: '/:pathMatch(.*)*', redirect: { name: 'home' }, },
]

const router = createRouter({
  // config deploy github
  // history: createWebHistory('/handmade-design/'),
  // history: createWebHashHistory('/handmade-design/'),
  history: createWebHashHistory(),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { top: 0 }
  //   }
  // }
  // scrollBehavior: () => ({ left: 0, top: 0 }),
  // scrollBehavior(to, from, savedPosition) {
  //   if (to.hash) {
  //     return {
  //       el: to.hash,
  //       behavior: 'smooth',
  //     }
  //   }
  // }
});

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function) => {
  if (to.matched.length < 1) {
    if (to.fullPath !== '/') {
      // return 404
    } else {
      return next({
        name: 'editor',
      });
    }
  }
  return next();
});

export default router;