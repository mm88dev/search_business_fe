<template>
  <h1>{{ name }}</h1>
  <p>{{ address }}</p>
  <p>{{ website }}</p>
  <p>{{ phone }}</p>
  <p>{{ openingHours }}</p>
</template>

<script setup lang="ts">
  import { ref, onMounted, defineProps } from 'vue';
  import { getBusiness } from '../services/api.service.ts';

  // Define props
  const { id } = defineProps<{
    id: string;
  }>();

  const name = ref('');
  const address = ref('');
  const website = ref('https://lecafedumarche.ch');
  const phone = ref('+41 27 203 70 70');
  const openingHours = ref('');

  onMounted(async () => {
    try {
      const fetchedData = await getBusiness(id);
      name.value = fetchedData.name;
      address.value = fetchedData.address;
      // todo:
      // website = fetchedData.website;
      // phone = fetchedData.phone;
      openingHours.value = fetchedData.openingHours;
    } catch (error) {
      console.log(error);
    }
  });
</script>

<style scoped></style>
