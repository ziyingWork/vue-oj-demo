<script setup lang="ts">
import { routes } from "@/router/routers"
import { useRouter } from 'vue-router'
import { ref } from "vue"

const router = useRouter()

//导航菜单 默认主页 高亮
const selectKeys = ref(["/"])

//路由跳转后，更新选中的菜单项
router.afterEach((to, from) => {
    selectKeys.value = [to.path]
});






/**
 * @param {string} key
 */
const doMenuClick = (key) => {
    router.push({
        path: key,
    })
}


</script>
    
<template>
    <div id="globalHeader">
        <a-menu mode="horizontal" :selected-keys="selectKeys" @menu-item-click="doMenuClick">
            <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
              <div
                :style="{
                  width: '80px',
                  height: '30px',
                  borderRadius: '2px',
                  background: 'var(--color-fill-3)',
                  cursor: 'text',
                }"
              />
            </a-menu-item>
            <a-menu-item v-for="item in routes" :key="item.path">{{item.name}}</a-menu-item>
            
        </a-menu>
    </div>

</template>
    