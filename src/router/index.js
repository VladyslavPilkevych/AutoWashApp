import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AdminView from '@/views/AdminView.vue/AdminView.vue';
import SignInView from "@/views/SignInView.vue/SignInView.vue";
import SignUpView from "@/views/SignUpView.vue/SignUpView.vue";
import UserView from '@/views/UserView.vue/UserView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signin",
      name: "signin",
      component: SignInView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminView,
      children: [
        {
          path: "storehouse",
          name: "admin-storehouse",
        },
        {
          path: "clients",
          name: "admin-clients",
        },
        {
          path: "workers",
          name: "admin-workers",
        },
      ],
    },
    {
      path: '/user',
      name: 'user',
      component: UserView
    }
  ],
});

export default router;
