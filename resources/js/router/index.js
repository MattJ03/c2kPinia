import { createApp } from 'vue;'
import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
import create from '../pages/create.vue';

const routes = [
    { path: '/create', component: create },
    
];

const router = createRouter({
    routes, 
    history: createWebHistory(),
});

export default router;