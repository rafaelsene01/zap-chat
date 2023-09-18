import { createRouter, createWebHistory } from 'vue-router'
import WhatsappTemplate from '@/layout/WhatsappLayout.vue'
import DefaultTemplate from '@/layout/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      component: DefaultTemplate,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: ':whatsapp_id',
          name: 'whatsapp',
          component: WhatsappTemplate,
          children: [
            {
              path: 'campanha',
              name: 'campanha',
              component: () => import('../views/CampaignView.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/contatos',
      component: DefaultTemplate,
      children: [
        {
          path: '',
          name: 'contatos',
          component: () => import('../views/ContactsView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => {
        return 'dashboard'
      }
    }
  ]
})

export default router
