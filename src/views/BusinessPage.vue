<template>
  <ErrorBoundary>
    <BusinessDetails :id="id" />
  </ErrorBoundary>
</template>

<script setup lang="ts">
  import BusinessDetails from '../components/BusinessDetails.vue';
  import ErrorBoundary from '../components/ErrorBoundary.vue';

  const { id } = defineProps<{
    id: string;
  }>();
</script>

<style scoped></style>
