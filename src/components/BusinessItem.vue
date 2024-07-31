<template>
  <div @click="handleGoToBusiness" class="card">
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

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;
    flex: 1 1 calc(50% - 20px);
    align-items: flex-start;
  }

  @media (max-width: 767px) {
    .card {
      flex: 1 1 100%;
    }
  }
</style>
