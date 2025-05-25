import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import ActivitesPage from './components/ActivitesPage.vue'
import ConnectionSite from './components/ConnectionSite.vue'
import ContactSite from './components/ContactSite.vue'
import HebergementsPage from './components/HebergementsPage.vue'
import IndexSite from './components/IndexSite.vue'
import TransportsPage from './components/TransportsPage.vue'
import LocationPage from './components/LocationPage.vue'
import ValiseSite from './components/ValiseSite.vue'
import FaqSite from './components/FaqSite.vue'
import ComptePage from './components/ComptePage.vue'
import InscriptionPage from './components/InscriptionPage.vue'
import PaysPage from './components/PaysPage.vue'
import CalendrierPage from './components/CalendrierPage.vue'
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
      path: '/connexion',
      component: ConnectionSite
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
      path: '/inscription',
      component: InscriptionPage
    },
    {
      path: '/pays',
      component: PaysPage
    },
    {
      path: '/calendrier',
      component: CalendrierPage
    }
]
})

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
