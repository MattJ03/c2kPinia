<template>
<div class="register-container">
    <h2 class="register-header"> Register Account </h2>
    <img src="/public/storage/images/registerimage.png" alt="register image"></img>
    <div class="form-group">
        <label> Email </label>
        <input type="email" v-model="form.email" />
    </div>
    <div class="form-group">
        <label> Passoword </label>
        <input type="password" v-model="form.password" />
    </div>
      <button class="register-button" @click="registerAccount"> Register Account </button>
</div>
 </template>
<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import router from '../router/index';
import { useAuthStore } from '../store/authStore.vue';

;

const form = reactive({
   email: '',
   password: '',
});
const error = ref('');
const loading = ref(false);

const registerAccount = async () => {
   loading.value = true;
   try {
    const res = await axios.post('/api/register', form);
    router.push('/login');
   } catch(error) {
   } finally {
    loading.value = false;
   };
}



</script>
<style scoped>
   .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 8px;
    border-radius: 14px;
    margin: 2px;
    background-color: blue;
    color: white;
 }
 .register-header {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .form-group {
    margin-bottom: 2px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .register-image {
    border: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1px;
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