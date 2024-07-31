<template>
  <div class="home">
    <Search @search="handleSearch" />
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <p v-else-if="notification">{{ notification }}</p>
    <BusinessList v-else :business-list="businessList" />
    <Loading v-if="isLoading" />
  </div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router';
  import BusinessList from '../components/BusinessList.vue';
  import Loading from '../components/Loading.vue';
  import Search from '../components/Search.vue';

  import { onMounted, ref } from 'vue';
  import { searchBusiness } from '../services/api.service.ts';
  const route = useRoute();
  const router = useRouter();
  const isLoading = ref(false);

  const businessList = ref([]);
  const notification = ref('');
  const errorMessage = ref('');
  const searchTerm = ref(route.query.term || '');

  const handleSearch = async (term: string) => {
    if (!term) {
      businessList.value = [];
      return;
    }

    isLoading.value = true;
    searchTerm.value = term;
    router.push({ query: { term } });

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
        notification.value = 'No business found.';
      }
    } catch (error) {
      errorMessage.value = error.message;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    const term = route.query.term as string;
    if (term) {
      handleSearch(term);
    }
  });
</script>

<style scoped>
  .home {
    display: flex;
    width: 80%;
    padding: 30px;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }
</style>
