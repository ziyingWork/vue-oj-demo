<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import { useBreakpoint } from 'vuestic-ui'

  const breakpoints = useBreakpoint()

  const isSidebarVisible = ref(breakpoints.smUp)

  watchEffect(() => {
    isSidebarVisible.value = breakpoints.smUp
  })

  const menu = [
    { icon: 'home', title: '主页' },
    { icon: 'book', title: '浏览题目' },
    { icon: 'va-check-circle', title: '浏览题目提交' },
    { icon: 'settings', title: '创建题目' },
    { icon: 'va-calendar', title: '管理题目' },
    { icon: 'logout', title: '退出' },
  ]
</script>

<template>
  <VaLayout
    :top="{ fixed: true, order: 1 }"
    :left="{ fixed: true, absolute: breakpoints.smDown, order: 2, overlay: breakpoints.smDown && isSidebarVisible }"
    @left-overlay-click="isSidebarVisible = false"
  >
    <template #top>
      <VaNavbar color="BackgroundSecondary">
        <template #left>
          <VaButton
            preset="secondary"
            :icon="isSidebarVisible ? 'menu_open' : 'menu'"
            @click="isSidebarVisible = !isSidebarVisible"
          />
        </template>
        <template #right>
          <div class="va-spacing-x-2 mb-6">
            <span
              v-for="i in 2"
              :key="i"
              class="rectangle"
            >va-spacing-x-2</span>
          </div>
        </template>
      </VaNavbar>
      <va-divider style="margin: 0" />
    </template>

    <template #left>
      <VaSidebar v-model="isSidebarVisible">
        <VaSidebarItem v-for="{ icon, title } in menu" :key="icon">
          <VaSidebarItemContent>
            <VaIcon :name="icon" />
            <VaSidebarItemTitle>
              {{ title }}
            </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
      </VaSidebar>
    </template>

    <template #content>
      <main>
        <article>
          <slot />
        </article>
      </main>
    </template>
  </VaLayout>
</template>


<style scoped>



</style>
