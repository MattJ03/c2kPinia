import { createApp } from 'vue';
import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
import register from '../pages/register.vue';
import login from '../pages/login.vue';
import create from '../pages/create.vue';

const routes = [
    { path: '/register', component: register },
    { path: '/login', component: login },
    { path: '/create', component: create },
];

const router = createRouter({
    routes, 
    history: createWebHistory(),
});

export default router;