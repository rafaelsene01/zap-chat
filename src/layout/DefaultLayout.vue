<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import IconVue from '@/components/Icon.vue'

const menu = ref([
  {
    title: 'Dashboard',
    icon: 'dashboard',
    link: 'dashboard'
  },
  {
    title: 'Contatos',
    icon: 'contatos',
    link: 'contatos'
  },
  {
    title: 'Funcionários',
    icon: 'funcionarios',
    link: 'funcionarios'
  },
  {
    title: 'Financeiro',
    icon: 'financeiro',
    link: 'financeiro'
  }
])
</script>

<template>
  <v-navigation-drawer class="pt-10" color="grey-lighten-3" width="92">
    <v-list-item class="px-4" v-for="item in menu" :key="item.title" :to="`/${item.link}`">
      <template #default="{ isActive }">
        <div
          class="d-flex flex-column justify-center align-center text-body-2"
          :class="{ 'text-secondary': isActive }"
        >
          <IconVue :name="item.icon" :active="isActive" />
          {{ item.title }}
        </div>
      </template>
    </v-list-item>

    <!-- @click="exit" -->
    <template v-slot:append>
      <v-hover v-slot="{ isHovering, props }">
        <v-list-item class="d-flex justify-center">
          <IconVue name="sair" :active="isHovering" v-bind="props" size="28" />
        </v-list-item>
      </v-hover>
    </template>
  </v-navigation-drawer>

  <v-main>
    <RouterView class="pa-8" />
  </v-main>
</template>
