<template>
  <div>
    <h2>{{ name }}</h2>
    <p>{{ address }}</p>
    <h3>Opening Hours</h3>

    <p v-for="(entry, index) in openingHours" :key="index">
      <span v-for="(hours, days) in entry" :key="days"
        ><strong>{{ days }}</strong>
        <p v-for="interval in hours" :key="interval">{{ interval }}</p></span
      >
    </p>
  </div>
</template>

<script setup lang="ts">
  const { name, address } = defineProps<{
    name: string;
    address: string;
    website?: string;
    phone?: string;
    openingHours: {
      [key: string]: string[];
    }[];
  }>();
</script>

<style scoped></style>
