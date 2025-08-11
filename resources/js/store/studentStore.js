import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';
import { useAuthStore } from '../store/authStore';

export const useStudentStore = defineStore('students', () => {
    const student = ref('');
    const students = ref([]);
    const loading = ref(false);
    const error = ref('');
    const numberOfStudents = computed(() => students.value.length);

    async function fetchTasks() {
        loading.value = true;
        try {
            const res = await axios.get('/api/student');
            students.value = res.data;
        } catch(error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    }
});