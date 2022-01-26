import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Events from './Pages/Events.vue'
import './index.css'

createApp(Events).use(VueAxios, axios).mount('#events')
