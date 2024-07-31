<template>
  <div v-if="error">
    <p>{{ error.message }}</p>
    <router-link to="/">Go to Home</router-link>
  </div>
  <slot v-else></slot>
</template>

<script setup>
  import { ref, onErrorCaptured } from 'vue';

  const error = ref(null);

  onErrorCaptured(err => {
    error.value = err;
    return false;
  });
</script>
