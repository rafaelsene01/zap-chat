<script setup>
import { ref } from 'vue'
import IconVue from '@/components/Icon.vue'

const menu = ref([
  {
    title: 'Campanha',
    icon: 'dashboard',
    link: 'campanha'
  },
  {
    title: 'Mensagens',
    icon: 'mensagens',
    link: 'mensagens'
  },
  {
    title: 'Automação',
    icon: 'bot',
    link: 'automacao'
  }
])
</script>

<template>
  <v-navigation-drawer nav class="pt-4" expand-on-hover color="grey-lighten-3" rail>
    <v-list density="compact" nav>
      <v-list-item v-for="item in menu" :key="item.title" :to="`${item.link}`">
        <template #prepend="{ isActive }">
          <IconVue :name="item.icon" :active="isActive" />
        </template>
        <template #default>
          <div class="px-2">
            {{ item.title }}
          </div>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <RouterView class="pa-8" />
</template>
