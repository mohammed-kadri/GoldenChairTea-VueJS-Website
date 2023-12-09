
import './assets/css/main.css'  // Add this line
import '../node_modules/video.js/dist/video-js.css'
import App from './App.vue'
import { createApp } from 'vue'

import '@fontsource-variable/readex-pro';
import '@fontsource/cairo';

import {PlyrVue} from '../node_modules/plyr-vue/dist/plyr-vue.js'
import 'plyr-vue/dist/plyr-vue.css'

import router from './router/index.js';


const app = createApp(App)

app.use(router)

app .use(PlyrVue, {
    plyr: {}
  })

app.mount('#app')

// window.Vue.createApp(VuePlyr).mount('#app')