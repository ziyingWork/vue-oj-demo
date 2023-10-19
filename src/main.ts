import './assets/main.css'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import { createVuestic  } from "vuestic-ui"
import "vuestic-ui/css"
import "material-design-icons-iconfont/dist/material-design-icons.min.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ArcoVue)
app.use(createVuestic())
app.mount('#app')
