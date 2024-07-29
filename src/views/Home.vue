<template>
  <h1>Home</h1>
  <Search @search="handleSearch" />
  <BusinessList :business-list="businessList" />
</template>

<script setup lang="ts">
  import Search from '../components/Search.vue';
  import BusinessList from '../components/BusinessList.vue';
  import { ref } from 'vue';
  import { searchBusiness } from '../services/api.service.ts';

  const businessList = ref([]);

  const handleSearch = async (term: string) => {
    if (!term) {
      businessList.value = [];
      return;
    }
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
  };
</script>

<style scoped></style>
