import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DataBindingView from '../views/DataBindingView.vue'
import DataBindingHtml from '../views/DataBindingHtml.vue'
import DataBindingSelect from '../views/DataBindingSelect.vue'
import DataBindingInput from '../views/DataBindingInput.vue'
import DataBindingAttr from '../views/DataBindingAttr.vue'
import DataBindingList from '../views/DataBindingList.vue'
import DataBindingStyle from '../views/DataBindingStyle.vue'
import EventClick from '../views/event/EventClick.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/databindingview', name: 'databindingview', component: DataBindingView },
  { path: '/databindinginput', name: 'databindinginput', component: DataBindingInput },
  { path: '/databindingselect', name: 'databindingselect', component: DataBindingSelect },
  { path: '/databindinghtml', name: 'databindinghtml', component: DataBindingHtml },
  { path: '/databindingstyle', name: 'databindingstyle', component: DataBindingStyle },
  { path: '/databindinglist', name: 'databindinglist', component: DataBindingList },
  { path: '/databindingattr', name: 'databindingattr', component: DataBindingAttr },

  { path: '/eventclick', name: 'eventclick', component: EventClick }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about", webpackPrefetch: true */ '../views/AboutView.vue')
  //   // webpackPrefetch -> v-show 화면 만들어지자마자 캐시에 담아둠.
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
