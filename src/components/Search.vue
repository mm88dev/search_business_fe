<template>
  <div>
    <input
      type="text"
      placeholder="Search business entries..."
      v-model="term"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { debounce } from 'lodash';

  // Define reactive variable
  const term = ref('');

  // Function to handle debounce and emit event
  const emitDebouncedSearch = debounce((value: string) => {
    emit('search', value);
  }, 300);

  // Watch for changes in the search term
  watch(term, newValue => {
    emitDebouncedSearch(newValue);
  });

  // Define emit function
  const emit = defineEmits();
</script>

<style scoped></style>
