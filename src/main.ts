import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {
    Button,
    Uploader
} from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
const config = app.config

app.use(router)
   .use(Button)
   .use(Uploader)

console.log(app.version, config)
app.mount('#app')