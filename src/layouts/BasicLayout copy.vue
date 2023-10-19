<script setup lang="ts">
import GlobalHeader from '../components/GlobalHeader.vue'

</script>

<template>
  <div id="basicLayout">
    <a-layout style="height: 400px;">
      <a-layout-header class="st-header">
        <GlobalHeader/>
      </a-layout-header>
      <a-layout-content class="st-content">
        <router-view/>
      </a-layout-content>
      <a-layout-footer class="st-footer">Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>

#basicLayout .st-header {
  background-color: red;
  margin-bottom: 16px;

}

#basicLayout .st-content {
  background-color: aquamarine;
  margin-bottom: 16px;

}

#basicLayout .st-footer {
  background-color: skyblue;
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

</style>
