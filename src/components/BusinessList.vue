<template>
  <main class="list">
    <BusinessItem
      v-for="business in businessList"
      :key="business.id"
      :id="business.id"
      :name="business.name"
      :address="business.address"
    />
  </main>
</template>

<script setup lang="ts">
  import BusinessItem from './BusinessItem.vue';
  const { businessList } = defineProps<{
    businessList: [
      {
        id?: string;
        name?: string;
        address?: string;
        websites: string[];
        phoneNumbers: string[];
        openingHours: {
          [key: string]: string[];
        }[];
      }
    ];
  }>();
</script>

<style scoped>
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 0;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
  }
</style>
