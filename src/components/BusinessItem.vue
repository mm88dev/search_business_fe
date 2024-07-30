<template>
  <div @click="handleGoToBusiness">
    <h2>{{ name }}</h2>
    <p>{{ address }}</p>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const { name, address, id } = defineProps<{
    id: string;
    name: string;
    address: string;
  }>();

  const handleGoToBusiness = () => {
    router.push({ name: 'Business', params: { id } });
  };
</script>

<style scoped></style>
