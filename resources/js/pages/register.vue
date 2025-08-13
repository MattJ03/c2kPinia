<template>
<div class="register-container">
    <h2 class="register-header"> Register Account </h2>
    <img src="/public/storage/images/registerimage.png" alt="register image"></img>
    <div class="form-group">
        <label> Email </label>
        <input type="email" class="form-group" v-model="form.email" />
    </div>
    <div class="form-group">
        <label> Passoword </label>
        <input type="password" class="form-group" v-model="form.password" />
    </div>
      <button class="register-button" @click="registerUser"> Register Account </button>
</div>
 </template>
<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import router from '../router/index';
import axios from 'axios';

const form = reactive({
   email: '',
   password: '',
});
const error = ref('');
const loading = ref(false);

const registerUser = async () => {
    loading.value = true;
    try {
    const res = await axios.post('/api/register', form);
    router.push('/login');
    } catch(error) {
        console.log('couldnt create student ', error);
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
</style>