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
    <v-navigation-drawer
      v-model="selected"
      nav
      class="pt-4"
      expand-on-hover
      color="grey-lighten-3"
      rail
    >
      <v-list density="compact" nav>
        <v-list-item
          v-for="item in menu"
          :key="item.title"
          :to="`/${item.link}`"
          :value="item.link"
        >
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

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped></style>

<style scoped></style>
