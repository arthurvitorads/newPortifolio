import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from '@/router/'

const app = createApp(App)
app.use(router) // usar o router
app.mount('#app')
