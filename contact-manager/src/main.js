import { createApp } from 'vue'
import { createPinia } from 'pinia'
/*
    Bootstrap Configure
*/
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

// Fontawesome configure
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
