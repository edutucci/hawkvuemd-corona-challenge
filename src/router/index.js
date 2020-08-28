import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../layouts/mainLayout.vue'),
    children: [
      { path: '', component: () => import('../views/StartPage.vue') },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
