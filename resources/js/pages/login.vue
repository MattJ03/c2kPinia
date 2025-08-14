<template>
   <div class="login-container">
    <h2 class="login-header"> Login </h2>
    <form @submit.prevent="loginUser">
     <div class="form-group">
        <label> Email </label>
        <input type="email" v-model="form.email" />
      </div>
      <div class="form-group">
        <label> Password </label>
        <input type="password" v-model="form.password" />
      </div>
      <button class="login-button" type="submit" > Login </button>
    </form> 
</div>

    </template>
    <script setup>
    import { ref } from 'vue';
    import { reactive } from 'vue';
    import router from '../router/index';
    import { useAuthStore } from '../store/authStore';

    const form = reactive({
      email: '',
      password: '',
    });

    const store = useAuthStore();

    console.log('loaded');
    const loginUser = async () => {
      await store.login(form);
      await router.push('/create');
    };


</script>
<style scoped>
.login-container {
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
.login-header {
    font-size: 28px;
 }
 .form-group {
    margin: 2px;
    gap: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 16px;
    align-items: center;
    height: 40px;
    width: 200px;
 }
 .login-button {
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
 .login-button:hover {
    background-color: black;
 }
</style>