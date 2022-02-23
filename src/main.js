import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'

import './assets/app.scss'


createApp(App).use(store).mount('#app')
