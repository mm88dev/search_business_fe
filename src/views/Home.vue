<template>
  <h1>Home</h1>
  <Search @search="handleSearch" />
  <p v-if="errorMessage">{{ errorMessage }}</p>
  <p v-else-if="notification">{{ notification }}</p>
  <BusinessList v-else :business-list="businessList" />
</template>

<script setup lang="ts">
  import Search from '../components/Search.vue';
  import BusinessList from '../components/BusinessList.vue';

  import { ref } from 'vue';
  import { searchBusiness } from '../services/api.service.ts';

  const businessList = ref([]);
  const notification = ref('');
  const errorMessage = ref('');

  const handleSearch = async (term: string) => {
    if (!term) {
      businessList.value = [];
      return;
    }
    try {
      notification.value = '';
      errorMessage.value = '';
      const fetchedBusinesses = await searchBusiness(term);
      businessList.value = fetchedBusinesses.map(business => {
        return {
          id: business.id,
          name: business.name,
          address: business.address,
          website: business.website,
          phone: business.phone,
          openingHours: business.openingHours
        };
      });
      if (!businessList.value.length) {
        notification.value = 'No business found';
      }
    } catch (error) {
      errorMessage.value = error.message;
    }
  };
</script>

<style scoped></style>
