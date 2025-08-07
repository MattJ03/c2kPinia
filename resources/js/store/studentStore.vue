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

   async function fetchTask() {
    loading.value = true;
    try {
        const res = await axios.get('/student', {
            header: {
                Authorization: 'Bearer ${token}',
     },
        });
        tasks.value = res.data;
        } catch(error) {
            console.log('Failed to fetch tasks', error);
        }  finally {
            loading.value = false;
        }
   };

   async function addTask(task) {
    loading.value = true;
    try {
        const res = axios.post('/student', task {
            header: {
                Authorization: 'Bearer ${token}',
            }
        }) 
    }
   }
    
});