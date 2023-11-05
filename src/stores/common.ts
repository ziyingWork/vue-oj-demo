// src/stores/common.js 或 .ts
import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', {
  state: () => ({
    mode: 'light' // 或 'dark'
  }),
  // ... 可能还有 getters 和 actions
});
