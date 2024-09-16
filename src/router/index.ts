import { createRouter, createWebHashHistory } from "vue-router";
import Default from "@/layouts/Default.vue";

const routes = [
  {
    path: '/',
    name: 'app',
    component: Default,
  },
]

const router = createRouter({
  // config deploy github
  // history: createWebHistory('/handmade-design/'),
  history: createWebHashHistory('/vue-fabric-design-editor/'),
  // history: createWebHashHistory(),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;