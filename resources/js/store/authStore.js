import { defineStore } from 'pinia';
import { ref } from 'vue';
import { reactive } from 'vue';
import axios from 'axios';
import router from '../router/index';

export const useAuthStore = defineStore('auth', () => {
  const token = ref('');
  const user = ref(null);

  function clearToken() {
    token.value = localStorage.removeItem('token');
    user.value = '';
  }


  async function login(credentials) {
    try {
      const res = await axios.post('/api/login', credentials);
      token.value = res.data.token;
      localStorage.setItem('token', token.value);
      user.value = res.data.user;
    } catch(error) {
      console.log(error);
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`;
  }

  async function logout() {
    try {
      const res = await axios.post('/api/logout');
      clearToken();
    } catch(error) {
      console.log(error);
    }
     delete axios.headers.defaults.common['Authorization'];
  }

  return {
    token, 
    user, 
    clearToken,
    loadToken,
    login,
    logout,
  };

});