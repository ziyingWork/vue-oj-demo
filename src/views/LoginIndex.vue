<script setup lang="ts">
const value = 0
const tabs = ['Login', 'Regist']

type KeyValuePairs = {
    [key: string]: any;
};


</script>
    
<template>
  <div class="st-login-layer">
    <va-tabs v-model="value" stateful grow>
        <template #tabs>
        <va-tab
            v-for="tab in tabs"
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
            :hover-opacity="0.4">
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

  .st-login-form {
    padding-left: 22px;
    padding-bottom: 20px;
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

  /* .st-captcha-code {
    width: 100%;
  }

  .st-captcha-show, .st-captcha-button {
    width: 50%;
    float: left;
    box-sizing: border-box;
  } */

</style>


