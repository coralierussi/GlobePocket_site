import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import ActivitesPage from './components/ActivitesPage.vue'
import ContactSite from './components/ContactSite.vue'
import HebergementsPage from './components/HebergementsPage.vue'
import IndexSite from './components/IndexSite.vue'
import TransportsPage from './components/TransportsPage.vue'
import LocationPage from './components/LocationPage.vue'
import ValiseSite from './components/ValiseSite.vue'
import FaqSite from './components/FaqSite.vue'
import ComptePage from './components/ComptePage.vue'
import PaysPage from './components/PaysPage.vue'
import CalendrierPage from './components/CalendrierPage.vue'
import LoginForm from './components/LoginForm.vue'
import ActiviteNewYork from './components/ActiviteNewYork.vue'
import RegisterForm from './components/RegisterForm.vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
Vue.use(Vuetify)

const vuetify = new Vuetify()

const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      component: IndexSite
    },
    {
      path: '/contact',
      component: ContactSite
    },
    {
      path: '/login',
      component: LoginForm
    },
    {
      path: '/register',
      component: RegisterForm
    },
    {
      path: '/activites',
      component: ActivitesPage
    },
    {
      path: '/hebergement',
      component: HebergementsPage
    },
    {
      path: '/transport',
      component: TransportsPage
    },
    {
      path: '/location',
      component: LocationPage
    },
    {
      path: '/maValise',
      component: ValiseSite
    },
    {
      path: '/faq',
      component: FaqSite
    },
    {
      path: '/compte',
      component: ComptePage
    },
    {
      path: '/pays',
      component: PaysPage
    },
    {
      path: '/calendrier',
      component: CalendrierPage
    },
    {
      path: '/activite/Etats-Unis-New-York',
      component: ActiviteNewYork
    }
]
})

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
