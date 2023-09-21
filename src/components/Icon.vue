<script setup>
import { computed } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    default: 24
  },
  active: {
    default: true
  }
})

const src = computed(
  () =>
    new URL(
      `../assets/icons/${props.active ? 'active' : 'desabled'}/${props.name}.svg`,
      import.meta.url
    )
)
</script>

<template>
  <img :src="src" :alt="`Icon - ${props.name}`" :height="props.size" :width="props.size" />
</template>
