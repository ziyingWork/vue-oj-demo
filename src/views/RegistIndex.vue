<script setup lang="ts">
  const value = 0;
  </script>
      
  <template>
    <div class="st-login-layer">
      <va-tabs v-model="value" stateful grow>
          <template #tabs>
          <va-tab
              v-for="tab in ['Login', 'Regist']"
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
            <va-card-title class="st-va-card-title">REGIST ACCOUNT</va-card-title>
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
              <va-select
                v-model="value"
                class="mt-3"
                style = "width: 50%;"
                label="Role"
                :options="options"
                clearable
              />
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
          </div>
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
  
  </style>
  