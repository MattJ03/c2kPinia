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

   async function fetchStudents() {
    loading.value = true;
    try {
        const res = await axios.get('/student', {
            headers: {
                Authorization: `Bearer ${token}`,
     },
        });
        students.value = res.data;
        } catch(error) {
            console.log('Failed to fetch students', error);
        }  finally {
            loading.value = false;
        }
   };

   async function addStudent(student) {
    loading.value = true;
    try {
        const res = await axios.post('/student', student, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
        });
          students.value.push(res.data);
    } catch(error) {
        console.log('Failed to add student', error);
    } finally {
        loading.value = false;
    }
   }

   async function deleteStudent(student) {
    loading.value = true;
    try {
        const res = await axios.delete('/student/${student.id}', {
            headers: {
           Authorization: `Bearer ${token}`,
            },
        });
         students.value = students.value.filter(s => s.id !== student.id);
    } catch(error) {
        console.log('Failed to delete the student', error);
    } finally {
        loading.value = false;
    }
   }

   return [
   loading, 
   error, 
   student.
   students,
   studentsCount,
   fetchStudents,
   addStudent,
   deleteStudent
   ];
    
});