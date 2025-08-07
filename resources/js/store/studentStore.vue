import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { computed } from 'vue';

export const useStudentStore = defineStore('students', () => {
    const loading = ref(false);
    const error = ref('');
    const student = ref('');
    const students = ref([]);
    const studentsCount = computed(() => students.value.length);

    function fetchTasks() {
        loading.value = true;
        await axios.get('/api/student') {
            Header: {
                Authorization: 
            }
        }
    }
});