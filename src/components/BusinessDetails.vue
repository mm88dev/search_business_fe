<template>
  <div>
    <h1>{{ name }}</h1>
    <p><strong>Address</strong></p>
    <p>{{ address }}</p>
    <p><strong>Website</strong></p>
    <p v-for="website in websites" :key="website">{{ website }}</p>
    <p><strong>Phone</strong></p>
    <p v-for="phone in phoneNumbers" :key="phone">{{ phone }}</p>
    <p><strong>Opening Hours</strong></p>

    <p v-for="(entry, index) in openingHours" :key="index">
      <span v-for="(hours, days) in entry" :key="days"
        ><strong>{{ days }}</strong>
        <span v-for="interval in hours" :key="interval">{{
          interval
        }}</span></span
      >
    </p>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { getBusiness } from '../services/api.service.ts';
  const router = useRouter();

  const { id } = defineProps<{
    id: string;
  }>();

  const name = ref('');
  const address = ref('');
  const websites = ref('');
  const phoneNumbers = ref('');
  const openingHours = ref('');

  onMounted(async () => {
    try {
      const fetchedData = await getBusiness(id);
      name.value = fetchedData.name;
      address.value = fetchedData.address;
      websites.value = fetchedData.websites;
      phoneNumbers.value = fetchedData.phoneNumbers;
      openingHours.value = fetchedData.openingHours;
    } catch (error) {
      throw new Error(error);
    }
  });
</script>

<style scoped></style>
