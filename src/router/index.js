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
          name: 'dashboard',
          component: () => import('../views/DashboardView.vue')
        },
        {
          path: ':whatsapp_id',
          name: 'whatsapp',
          component: WhatsappTemplate,
          children: [
            {
              path: 'campanha',
              name: 'campanha',
              component: () => import('../views/whatsapp/CampaignView.vue')
            },
            {
              path: 'mensagens',
              name: 'mensagens',
              component: () => import('../views/whatsapp/MessageView.vue')
            },
            {
              path: 'automacao',
              name: 'automacao',
              component: () => import('../views/whatsapp/BotView.vue')
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
      path: '/funcionarios',
      component: DefaultTemplate,
      children: [
        {
          path: '',
          name: 'funcionarios',
          component: () => import('../views/EmployeesView.vue')
        }
      ]
    },
    {
      path: '/financeiro',
      component: DefaultTemplate,
      children: [
        {
          path: '',
          name: 'financeiro',
          component: () => import('../views/FinancialView.vue')
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
