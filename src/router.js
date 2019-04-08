import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Review from './views/Review.vue'
import Plan from './views/Plan.vue'
import PlanDetail from './views/PlanDetail.vue'
import Profile from './views/Profile.vue'

import authService from './service/authService'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'Plan',
      component: Home,
      children: [
        {
          path: 'review',
          name: 'Review',
          component: Review
        },
        {
          path: 'plan',
          name: 'Plan',
          component: Plan
        },
        {
          path: 'plan/:id',
          name: 'plandetail',
          component: PlanDetail
        },
        {
          path: 'profile',
          name: 'Profile',
          component: Profile
        }
      ]
    },
    { path: '/login', name: 'login', component: Login }
  ]
})

router.beforeEach((to, from, next) => {

  if (!authService.isUserAuthenticated() && to.fullPath != '/login') {
      router.app.$router.push('/login');
      return;
  }

  next();
})
export default router;
