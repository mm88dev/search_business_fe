<template>
  <div v-if="error" class="error-page">
    <p class="error-message">{{ error.message }}</p>
    <router-link to="/">Go to Home</router-link>
  </div>
  <slot v-else></slot>
</template>

<script setup>
  import { onErrorCaptured, ref } from 'vue';

  const error = ref(null);

  onErrorCaptured(err => {
    error.value = err;
    return false;
  });
</script>

<style scoped>
  .error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>
