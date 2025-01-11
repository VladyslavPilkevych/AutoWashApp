<script setup>
import { defineProps, watch } from 'vue';

const props = defineProps({
  address: {
    type: String,
    required: true,
  },
  number: {
    type: [String, Number],
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  isVisible: {
    type: Boolean,
    default: true,
  },
  onClose: {
    type: Function,
    required: true,
  },
});
watch(
  () => [props.date, props.time, props.address, props.number, props.isVisible],
  ([newDate, newTime, newAddress, newNumber, isVisible]) => {
    console.log('Props updated:', { newDate, newTime, newAddress, newNumber, isVisible });
  },
  {immediate: true}
);
</script>

<template>
  <div class="full-width-container">
    <v-card
      v-if="isVisible"
      class="pa-4 d-flex justify-space-between align-center"
      outlined
    >
      <div class="info-flex">
        <div><b>Address:</b> {{ address }}</div>
        <div><b>Phone number:</b> {{ number }}</div>
        <div><b>Date:</b> {{ date }}</div>
        <div><b>Time:</b> {{ time }}</div>
      </div>
      <v-btn icon @click="onClose" aria-label="Close" class="ml-auto">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card>
  </div>
</template>

<style scoped>
.full-width-container {
  display: flex;
  margin: 0 auto;
}
.v-card {
  width: 800px;
}
.info-flex {
  display: flex;
  gap: 16px;
}
</style>
