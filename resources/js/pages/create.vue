<template>
<div class="form-container">
    <h2 class="header-create"> Create Form </h2>
    <div class="form-group">
        <label> First Name </label>
        <input type="text" v-model="form.first_name" required />
    </div>
    <div class="form-group">
        <label> Last Name </label>
        <input type="text" v-model="form.last_name" required />
    </div>
    <div class="form-group">
        <label> Email </label>
        <input type="email" v-model="form.email" required/>
    </div>
    <div class="form-group" >
    <label> Phone Number </label>
    <input type="number" v-model="form.phone" required />
    </div>
    <div class="form-group" >
        <label> Gender </label>
        <select v-model="form.gender">
            <option> Male </option>
            <option> Female </option>
        </select>
    </div>
    <button class="button-create" @click.prevent="store.addStudent(form)"> Create </button>
</div>
</template>
<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
import router from '../router/index';
import StudentStore, { useStudentStore } from '../store/studentStore.vue'

const store = useStudentStore();

const form = reactive({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    gender: '',
});




</script>
<style scoped>
.header-create {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.form-container {
    margin: 2px;
    border: 8px;
    border-radius: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    color: white;
}
.form-group {
    margin-bottom: 2px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.button-create {
    width: 110px;
    height: 50px;
    border:10px;
    background-color: gold;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
}
</style>