<script setup lang="ts">
// import LoginUtils from '../utils/LoginUtils'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const tabValue = ref(0)

const router = useRouter();

const jumpToRegistIndex = () => {
  router.push('/regist-index')
  tabValue.value = 1
} 


</script>
    
<template>
  <div class="st-login-layer">
    <va-tabs v-model="tabValue" stateful grow>
        <template #tabs>
        <va-tab
            class="prevent-click-va-tab"
            v-for="tab in ['Login','Regist']"
            :key="tab"
        >
            {{ tab }}
        </va-tab>
        </template>
    </va-tabs>
    <va-card>
      <va-form
        class="w-[300px]"
        tag="form"
        @submit.prevent="handleSubmit"
      >
        <div lass="st-login-div">
          <va-card-title class="st-va-card-title">GET STARTED</va-card-title>
          <div class="st-login-form">
            <va-input
              v-model="email"
              type="email"
              label="Email"
            />
            <va-input
              v-model="password"
              class="mt-3"
              type="password"
              label="Password"
            />
            <va-input
              v-model="value1"
              class="mt-3"
              placeholder="Code"
              label="captcha"
              preset="solid"
            />
            <va-input
              class="mt-3 st-show-code"
              v-model="value1"
              :rules="[(v) => v.length > 3 || `Fulfill the condition`]"
              label="accept captcha"
            />
            <va-button
              class="mr-6 mb-2 st-accept-code"
              color="Success"
              preset="secondary"
              hover-behavior="opacity"
              :hover-opacity="0.4"
            >
            Send
            </va-button>
          </div>
          
        </div>
        <va-card-actions align="between">
          <va-button 
            class="mr-6 mb-2"
            color="TextPrimary" 
            preset="secondary"
            hover-behavior="opacity"
            :hover-opacity="0.4"
            @click="jumpToRegistIndex"
            >
            Regist
          </va-button>
          <va-button>Login</va-button>
        </va-card-actions>
      </va-form>
    </va-card>
    </div>
</template>

<style scoped>
  .st-login-layer {
     width: 26%;
     margin: 100px auto;
  }

  .prevent-click-va-tab {
    pointer-events: none;
  }

  .st-login-form {
    padding-left: 22px;
    padding-bottom: 10px;
  }

  .st-va-card-title {
    font-size: 25px;
    padding-top: 22px;
  }

  .st-show-code {
    width: 50%;
  }

  .st-accept-code {
    margin-top: 30px;
    margin-left: 15px;
  }

</style>


