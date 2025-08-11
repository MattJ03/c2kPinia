import { createApp } from 'vue';
import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
import create from '../pages/create.vue';
import login from '../pages/login.vue';

const routes = [
    { path: '/create', component: create },
    { path: '/login', component: login },
];

const router = createRouter({
    routes, 
    history: createWebHistory(),
});

export default router;