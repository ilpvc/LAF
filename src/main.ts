import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import naive from "naive-ui";
import router from "./router"
import {createPinia} from "pinia";

const pinia = createPinia()


const app = createApp(App)
app.use(naive)
app.use(router)
app.use(pinia)
app.mount('#app')
