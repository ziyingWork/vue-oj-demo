import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const userStore = defineStore('user', () => {
  const whetherLogin = ref(false)
  const whetherAdmin = ref("")
  const userEmail = ref("")
})