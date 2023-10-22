<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0);

const a = () => {
    value.value = 2
    console.log(value.value)
}

</script>
    
<template>
    <va-tabs v-model="value" >
      <template #tabs>
        <va-tab
          v-for="tab in ['One', 'Two', 'Three']"
          :key="tab"
        >
          {{ tab }}
        </va-tab>
        <va-button @click="a"> Button </va-button>
      </template>
    </va-tabs>
  </template>
