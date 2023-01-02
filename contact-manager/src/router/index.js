import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactManager from '../views/ContactManager.vue'
import AddContact from '../views/AddContact.vue'
import EditContact from '../views/EditContact.vue'
import ViewContact from '../views/ViewContact.vue'
import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/contacts',
      component: HomeView
    },
    {
      path: '/contacts',
      name: 'ContactManager',
      component: ContactManager
    },
    {
      path: '/contact/add',
      name: 'AddContact',
      component: AddContact
    },
    {
      path: '/contact/edit/:contactId',
      name: 'EditContact',
      component: EditContact
    },
    {
      path: '/contact/view/:contactId',
      name: 'ViewContact',
      component: ViewContact
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: PageNotFound
    },
  ]
})

export default router
