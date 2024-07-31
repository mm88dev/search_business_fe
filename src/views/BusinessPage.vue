<template>
  <ErrorBoundary>
    <BusinessDetails :id="id" />
  </ErrorBoundary>
</template>

<script setup lang="ts">
  import ErrorBoundary from '../components/ErrorBoundary.vue';
  import BusinessDetails from '../components/BusinessDetails.vue';

  const { id } = defineProps<{
    id: string;
  }>();
</script>

<style scoped></style>
