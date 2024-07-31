import { createRouter, createWebHistory } from 'vue-router';
import BusinessPage from '../views/BusinessPage.vue';
import Home from '../views/Home.vue';
import PageNotFound from '../views/PageNotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/business/:id',
    name: 'Business',
    component: BusinessPage,
    props: true
  },
  // catch all
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
