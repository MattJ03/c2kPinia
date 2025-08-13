<template>
<div class="register-container">
    <h2 class="register-header"> Register Account </h2>
    <img src="/public/storage/images/registerimage.png" alt="register image" />
    <form @submit.prevent="registerUser">
        <div class="form-group">
            <label> Name </label>
            <input type="text" class="form-group" v-model="form.name" />
        </div>
    <div class="form-group">
        <label> Email </label>
        <input type="email" class="form-group" v-model="form.email" />
    </div>
    <div class="form-group">
        <label> Password </label>
        <input type="password" class="form-group" v-model="form.password" />
    </div>
    <button class="register-button" type="submit"> Register </button>
</form>
</div>
 </template>

<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
import router from '../router/index';
import axios from 'axios';

console.log('check in');
const form = reactive({
    name: '',
    email: '',
   password: '',
});
const error = ref('');
const loading = ref(false);

const registerUser = async () => {
    console.log('Hey');
    console.log('form, ', form);
    loading.value = true;
    try {
    const res = await axios.post('http://127.0.0.1:8000/api/register', {
  name: form.name,
  email: form.email,
  password: form.password
});
    await router.push('/login');
    } catch(error) {
        console.log('couldnt create user ', error);
    } finally {
        loading.value = false;
    }
};



</script>
<style scoped>
   .register-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 8px solid black;
    padding: 16px;
    min-height: 100vh;
    border-radius: 14px;
    margin: 2px;
    gap: 16px;
    background-color: blue;
    color: white;
 }
 .register-header {
    font-size: 28px;
    
 }
 .form-group {
    margin-bottom: 2px;
    gap: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
   height: 40px;
   width: 200px;
 }
 .register-image {
    border: 1px;
    border-radius: 20px;
    margin-bottom: 10px;
 }
 .register-button {
    width: 110px;
    height: 50px;
    border: 10px;
    border-radius: 14px;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: gold;
    color: white;
 }
 .register-button:hover {
    background-color: black;
 }
</style>