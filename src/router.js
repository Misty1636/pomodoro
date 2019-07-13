import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'optionMenu__menu__item--active',
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('./views/Layout.vue'),
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import('./views/List.vue'),
        },
        {
          path: 'analytics',
          name: 'analytics',
          component: () => import('./views/Analytics.vue'),
        },
        {
          path: 'ringtones',
          name: 'ringtones',
          component: () => import('./views/Ringtones.vue'),
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
