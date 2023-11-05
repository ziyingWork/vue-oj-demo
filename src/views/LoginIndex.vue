<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import { useForm } from "vuestic-ui"
import { generateRandomFourDigits } from '@/utils/CommonUtils'
import { userStore } from '@/stores/user'


const { isValid, validate, reset, resetValidation } = useForm('loginFormRef')

const tabValue = ref(0)

const router = useRouter()

const jumpToRegistIndex = () => {
  router.push('/regist-index')
  tabValue.value = 1
}

const showCode = ref("")

//用于创建一个响应式对象
const form = reactive({
  email: "",
  password: "",
  acceptcode:""
})

// 模拟发送验证码
const showCodeMethod = () => {
  showCode.value = generateRandomFourDigits()
}

//判断是否发送验证码
const whetherSendCode = () => {
  if(showCode.value!==""){
    return true
  }
  return false
}

const store = userStore() 

//登录
const loginMethod = () => {
  if(showCode.value == form.acceptcode) {
    store.whetherLogin = true
    store.userEmail = form.email
    console.log("登录")
    console.log(store)
    router.push('/')
  }
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
        ref="loginFormRef"
        @submit.prevent="handleSubmit"
      >
        <div lass="st-login-div">
          <va-card-title class="st-va-card-title">GET STARTED</va-card-title>
          <div class="st-login-form">
            <va-input
              v-model="form.email"
              type="email"
              label="Email"
              :rules="[
                (v) => Boolean(v) || 'Email is required',
                (v) => /.+@.+\..+/.test(v) || 'Invalid email format'
              ]"
            />
            <va-input
              v-model="form.password"
              class="mt-3"
              type="password"
              label="Password"
              :rules="[
                (v) => Boolean(v) || 'Password is required',
                (v) => v.length > 6 || 'Password must be a least 6 symbols',
              ]"
            />
            <va-input
              v-model="form.acceptcode"
              class="mt-3"
              placeholder="Code"
              label="captcha"
              preset="solid"
            />
            <va-input
              class="mt-3 st-show-code"
              v-model="showCode"
              label="accept captcha"
              :success="whetherSendCode()"
            />
            <va-button
              class="mr-6 mb-2 st-accept-code"
              color="Success"
              preset="secondary"
              hover-behavior="opacity"
              :hover-opacity="0.4"
              @click="showCodeMethod"
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
          <va-button @click="loginMethod">Login</va-button>
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


