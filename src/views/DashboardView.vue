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
    _id: 'asdadisjnaoiugvner-56r19fg8ew1r41',
    name: 'Negocio 01',
    phone: '(34) 98418-7564',
    color: 'success'
  },
  {
    _id: 'asdgwrtjueki7546y3wf-56r19fg8ew1r41',
    name: 'Negocio 02',
    phone: '(34) 98418-7564',
    color: 'red-darken-1'
  }
]
</script>

<template>
  <div>
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

    <RouterLink
      class="mt-4 py-3 px-6 d-flex justify-space-between align-center elevation-8 rounded underline text-black"
      v-for="(item, i) in items"
      :key="i"
      :to="`dashboard/${item._id}/campanha`"
    >
      <div class="d-flex align-center">
        <v-sheet width="8" height="8" :color="item.color" rounded class="mr-4" />
        <span>{{ item.name }}</span>
      </div>
      <span>{{ item.phone }}</span>
      <v-btn icon class="pa-0" size="24">
        <IconVue name="arrow-right" />
      </v-btn>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
