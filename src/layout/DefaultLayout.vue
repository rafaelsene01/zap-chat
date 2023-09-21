<script setup>
import { ref } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import IconVue from '@/components/Icon.vue'

const route = useRoute()

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
  }
])

const selected = ref('dashboard')
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="selected" class="pt-10" color="grey-lighten-3" width="92">
      <v-list-item
        class="px-4"
        v-for="item in menu"
        :key="item.title"
        :to="`/${item.link}`"
        :value="item.link"
      >
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
    </v-navigation-drawer>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped></style>

<style scoped></style>
