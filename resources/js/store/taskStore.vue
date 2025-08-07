import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { computed } from 'vue';

export const useTaskStore = defineStore('tasks', () => {
    const loading = ref(false);
    const error = ref('');
    const task = ref('');
    const tasks = ref([]);
    const tasksCount = computed () => { }
});