import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import naive from "naive-ui";


const app = createApp(App)
app.use(naive)

app.mount('#app')