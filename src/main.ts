import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import naive from "naive-ui";
// @ts-ignore
import router from "./router"

const app = createApp(App)
app.use(naive)
app.use(router)
app.mount('#app')