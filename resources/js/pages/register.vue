<template>
<div class="register-container">
    <h2 class="register-header"> Register Account </h2>
</div>
 </template>
<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import router from '../router/index';

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
</style>