import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '../js/App.vue';
import router from './router/index.js';

const app = createApp(App);
const pinia = CreatePinia();
app.use(router);
app.use(pinia);
app.mount('#app');
