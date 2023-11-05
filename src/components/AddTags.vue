<script setup lang="ts">
    import { ref, watch, reactive } from 'vue'
    
    
    interface BadgeInfo {
      text: string;
    }
    
    // 通过reactive函数将badges数组转换成响应式对象
    const badges: BadgeInfo[] = reactive([]);
    
    
    const removeBadge = (index) => {
      badges.splice(index, 1); // 删除指定索引的元素
      console.log(badges)
    }
    
    const newBadgeText = ref(''); // 输入框绑定的响应式变量
    
    const addBadge = () => {
      console.log(newBadgeText.value)
      if (newBadgeText.value.trim()) { // 检查输入不是空白字符串
        badges.push({ text: newBadgeText.value }); // 将新的文本添加到数组
        newBadgeText.value = ''; // 清空输入框
      }
    }
    
    
    
    
    </script>

<template>
    <div id="mainComposition">
        <div class="container">
            <div v-for="(badge, index) in badges" :key="index">
                <va-button
                    color="BackgroundBorder"
                    icon-right="clear"
                    icon-color="TextPrimary"
                    class="mr-3 mb-2"
                    size="small"
                    @click="removeBadge(index)" 
                >
                    {{ badge.text}}
                </va-button>
            </div>
        </div>
        <div>
            <va-input
                v-model="newBadgeText"
                class="mb-6"
                :messages="message"
                label="题目标签"
                placeholder="请输入题目的标签类型"
            />
            <va-button
                preset="secondary"
                class="mr-6 mb-2 st-submit-title"
                @click="addBadge"
            >
                Add Tags
            </va-button>
        </div>
    </div>    
</template>

<style scoped>
    #mainComposition {
        display: grid; /* 使用 Grid 布局 */
        grid-template-columns: 1fr; /* 一个列轨道，占用所有可用空间 */
        gap: 15px; /* 设置行间距 */
    }
    .container {
        display: flex; /* 开启Flexbox布局 */
        flex-wrap: wrap; /* 允许项目换行 */
        gap: 10px; /* 设置项目之间的间隙 */
    }
    .st-submit-title {
        margin: 20px;
        margin-top: 20px;
    }

</style>