<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useBreakpoint } from 'vuestic-ui'
import { useRouter } from 'vue-router';
import { userStore } from '@/stores/user'

let page = ref()

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

const router = useRouter();

const jumpToLoginIndex = () => {
  router.push('/login-index');
} 

const jumpToRegistIndex = () => {
  router.push('/regist-index');
} 

const jumpPage = (pageIndex) => {
  page.value=pageIndex
  console.log(page.value)
  navigateToPage(pageIndex)
}

// 映射路由
const pageRoutes = {
  0: '/',
  1: '/browse-questions',
  2: '/browse-questions-to-submit',
  3: '/create-questions',
  4: '/manage-questions',
  // ... 其他页面映射
}

const navigateToPage = (pageIndex) => {
  const routePath = pageRoutes[pageIndex] 
  router.push(routePath)
}

const store = userStore() 





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
          <div id="right-no-login" v-show="!store.whetherLogin">
            <div class="va-spacing-x-2 mb-6">
              <va-button
                preset="primary"
                class="mr-6 mb-2"
                @click="jumpToLoginIndex"
              >
                登录
              </va-button>
              <va-button @click="jumpToRegistIndex"> 注册 </va-button>
            </div>
          </div>
          <div id="right-already-login" v-show="store.whetherLogin">
            <va-list-item class="list__item">
              <va-list-item-section avatar>
                <va-avatar>
                  <img src="https://i.pinimg.com/280x280_RS/08/e9/ba/08e9ba9cbd24db8de0c250570af460a4.jpg">
                </va-avatar>
              </va-list-item-section>
              <va-list-item-section>
                <va-list-item-label>
                  Julien
                </va-list-item-label>
                <va-list-item-label caption>
                  1249353194@qq.com
                </va-list-item-label>
              </va-list-item-section>
            </va-list-item>
          </div>
        </template>
      </VaNavbar>
      <va-divider style="margin: 0" />
    </template>

    <template #left>
        <VaSidebar v-model="isSidebarVisible">
          <!-- <VaSidebarItem v-for="{ icon, title } in menu" :key="icon" :active="page === 1" > -->
          <VaSidebarItem v-for="(item, index) in menu" :key="icon" :active="page===index" @click="jumpPage(index)">
            <VaSidebarItemContent>
              <VaIcon :name="item.icon" />
              <VaSidebarItemTitle>
                {{ item.title }}
              </VaSidebarItemTitle>
            </VaSidebarItemContent>
          </VaSidebarItem>
        </VaSidebar>
    </template>

    <template #content>
      <main>
        <div class="st-main">
          <router-view/>
        </div>  
      </main>
    </template>
  </VaLayout>
</template>


<style scoped>
  .st-main {
    margin: 13px;
  }

  

</style>
