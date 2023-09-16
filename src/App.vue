<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import IconVue from './components/Icon.vue'

const menu = ref([
  {
    title: 'Dashboard',
    icon: 'dashboard',
    link: ''
  },
  {
    title: 'Contatos',
    icon: 'contatos',
    link: 'contatos'
  }
])
const selected = ref('')
</script>

<template>
  <v-app>
    <v-navigation-drawer class="pt-4" expand-on-hover color="grey-lighten-3" rail>
      <v-list density="compact" nav>
        <v-list-item
          v-for="item in menu"
          :key="item.title"
          :prepend-icon="item.icon"
          :active="item.link === selected"
          @click="selected = item.link"
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
