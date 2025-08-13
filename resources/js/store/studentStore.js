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

    async function fetchStudents() {
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

    async function addStudent(student) {
        loading.value = true;
        try {
            const res = await axios.post('/api/student');
            students.value.push(res.data);
        } catch(error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    }

    async function getStudent(gotStudent) {
        loading.value = true;
        try {
            const res = await axios.get(`/api/student/${gotStudent.id}`)
            student.value = res.data;
        } catch(error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    }

    async function deleteStudent(studentData) {
        loading.value = true;
        try {
            const res = await axios.delete(`/api/student${studentData.id}`);
            students.value = students.value.filter(s => s.id !== studentData.id);
        } catch(error) {
            console.log('failed deleting student', error);
        } finally {
            loading.value = true;
        }
    }

    return {
        student, 
        students, 
        loading, 
        error,
        numberOfStudents,
        fetchStudents,
        addStudent,
        getStudent,
        deleteStudent,
    };
});