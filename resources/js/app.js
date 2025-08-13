import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '../js/App.vue';
import router from './router/index.js';
import { useAuthStore } from './store/authStore.js';

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);

const authStore = useAuthStore();
authStore.loadToken();

app.mount('#app');
