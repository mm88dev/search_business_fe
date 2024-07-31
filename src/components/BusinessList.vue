<template>
  <div>
    <BusinessItem
      v-for="business in businessList"
      :key="business.id"
      :id="business.id"
      :name="business.name"
      :address="business.address"
    />
  </div>
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

<style scoped></style>
