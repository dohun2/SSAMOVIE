import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import HomeView from '../views/HomeView.vue'
import CommunityView from '../views/CommunityView.vue'
import RecommendView from '../views/RecommendView.vue'
import UserProfileView from '../views/UserProfileView'
import ArticleDetailView from '../views/ArticleDetail.vue'
import ArticleEditView from '../views/ArticleEditView.vue'
import NotFound404 from '../views/NotFound404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/community',
    name: 'community',
    component: CommunityView
  },
  {
    path: '/community/:articleId',
    name: 'article',
    component: ArticleDetailView
  },
  {
    path: '/community/:articleId/edit',
    name: 'articleEdit',
    component: ArticleEditView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: RecommendView
  },
  {
    path: '/userprofile/:username',
    name: 'userprofile',
    component: UserProfileView
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404'
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
