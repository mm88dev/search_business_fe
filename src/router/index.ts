import { createRouter, createWebHistory } from 'vue-router';
import Business from '../views/Business.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/business/:id',
    name: 'Business',
    component: Business,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
