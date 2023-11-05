<script setup lang="ts">
import { ref } from 'vue';



</script>
    
<template>
  <div class="home-main">
    <div class="box-top">
      <va-input
          class="st-retrieve-question"
          v-model="value"
          placeholder="请输入题目名称"
          label="Title of question"
      />
      <va-input
          class="st-retrieve-tab"
          v-model="value"
          placeholder="请输入标签名称"
          label="Title of tab"
      />
      <va-button
          preset="primary"
          class="mr-6 mb-2 st-retrieve-button"
      >
          Primary
      </va-button>
      
    </div>
    <div class="box-buttom">
      
    
    </div>
  </div>
</template>


<style scoped>
  .home-main {
    display: flex;
    flex-direction: column;
    margin: 20px;
    /*align-items: center;*/ /* 垂直居中对齐子元素 */
  }

  .st-retrieve-question, .st-retrieve-tab {
    margin-right: 20px;
  }
  
  .st-retrieve-button {
    margin-top: 18px;
  }

</style>