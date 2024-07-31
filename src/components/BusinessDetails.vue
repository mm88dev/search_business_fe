<template>
  <Loading v-if="isLoading" />
  <div v-else class="business-details">
    <header class="details-header">
      <h1>{{ name }}</h1>
    </header>
    <main class="details-container">
      <section class="details-section">
        <div class="detail-item">
          <p class="detail-label">Address</p>
          <p class="detail-value">{{ address }}</p>
        </div>
        <div class="detail-item">
          <p class="detail-label">Website</p>
          <p class="detail-value" v-for="website in websites" :key="website">
            <a :href="website" target="_blank">{{ website }}</a>
          </p>
        </div>
        <div class="detail-item">
          <p class="detail-label">Phone</p>
          <p class="detail-value" v-for="phone in phoneNumbers" :key="phone">
            <a :href="'tel:' + phone">{{ phone }}</a>
          </p>
        </div>
      </section>
      <section class="details-section">
        <p class="detail-label">Opening Hours</p>
        <div
          class="hours-list"
          v-for="(entry, index) in openingHours"
          :key="index"
        >
          <div class="hours-entry" v-for="(hours, days) in entry" :key="days">
            <div>{{ days }}</div>
            <div class="hours-intervals">
              <div v-for="interval in hours" :key="interval">
                {{ interval }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import Loading from '../components/Loading.vue';
  import { getBusiness } from '../services/api.service.ts';
  import { OpeningHours } from '../types/index.ts';

  const { id } = defineProps<{
    id: string;
  }>();

  const name = ref('');
  const address = ref('');
  const websites = ref<string[]>([]);
  const phoneNumbers = ref<string[]>([]);
  const openingHours = ref<OpeningHours>({});
  const isLoading = ref(false);

  onMounted(async () => {
    isLoading.value = true;
    try {
      const fetchedData = await getBusiness(id);
      if (!fetchedData) {
        throw new Error('Business not found');
      }
      name.value = fetchedData.name;
      address.value = fetchedData.address;
      websites.value = fetchedData.websites;
      phoneNumbers.value = fetchedData.phoneNumbers;
      openingHours.value = fetchedData.openingHours;
    } catch (error) {
      throw new Error(error as string);
    } finally {
      isLoading.value = false;
    }
  });
</script>

<style scoped>
  .business-details {
    padding: 10px 30px;
    width: 50%;
    margin: 0 auto;
  }

  .details-header {
    text-align: left;
    margin-bottom: 20px;
  }

  .details-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
  }

  .details-section {
    text-align: left;
    flex: 1;
    min-width: 0;
  }

  .detail-label {
    font-weight: bold;
  }

  .detail-item {
    padding-bottom: 5px;
  }

  .detail-value {
    margin-left: 20px;
  }

  .hours-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .hours-entry {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }

  .hours-intervals {
    text-align: right;
  }

  @media (max-width: 768px) {
    .business-details {
      width: 100%;
      padding: 10px 30px;
    }

    .details-container {
      flex-direction: column;
      gap: 10px;
    }

    .hours-entry {
      padding-right: 40px;
    }
  }
</style>
