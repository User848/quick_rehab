import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DoctorInfo from '../components/DoctorInfo.vue';
import OrderView from '../views/OrderView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: ':name',
          name: 'home-doctor',
          component: DoctorInfo,
          props: true,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'), // Dynamicky import ContactView
    },
  ],
});

export default router;
