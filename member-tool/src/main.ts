import 'view-ui-plus/dist/styles/viewuiplus.css'
import './style.css'
import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'

createApp(App).use(ViewUIPlus).mount('#root')
