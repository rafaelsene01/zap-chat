<script setup>
import { RouterLink } from 'vue-router'
import IconVue from '@/components/Icon.vue'

const count = [
  {
    value: 1,
    color: 'success'
  },
  {
    value: 2,
    color: 'red-darken-1'
  }
]

const items = [
  {
    name: 'Negocio 01',
    phone: '(34) 98418-7564',
    color: 'success'
  },
  {
    name: 'Negocio 02',
    phone: '(34) 98418-7564',
    color: 'red-darken-1'
  }
]
</script>

<template>
  <div class="pa-8">
    <h1 class="font-weight-light">Numeros conectados</h1>

    <div class="mt-10 d-flex">
      <v-sheet
        v-for="(item, i) in count"
        :key="i"
        width="30"
        height="30"
        class="d-flex justify-center align-center mr-2"
        :color="item.color"
        rounded
      >
        <span class="font-weight-light"> 1 </span>
      </v-sheet>
    </div>

    <v-card
      class="mt-4 py-2 px-6 d-flex justify-space-between align-center"
      v-for="(item, i) in items"
      :key="i"
    >
      <div class="d-flex align-center">
        <v-sheet width="8" height="8" :color="item.color" rounded class="mr-4" />
        <span>{{ item.name }}</span>
      </div>
      <span>{{ item.phone }}</span>
      <v-btn icon class="pa-0" size="24">
        <IconVue name="arrow-right" />
      </v-btn>
    </v-card>

    <RouterLink to="dashboard/xxxxxxx/campanha">Campanha</RouterLink>
  </div>
</template>
