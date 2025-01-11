<script setup>
import { ref, computed, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  date: {
    type: Date,
    required: true,
  },
});

const emit = defineEmits(['update:date']);

const selectedDate = ref(new Date(props.date));

watch(
  () => props.date,
  (newDate) => {
    selectedDate.value = new Date(newDate);
  }
);

const formatDate = (date) => {
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
  });
};

const prevDate = () => {
  if (!isPrevDateDisabled.value) {
    const newDate = new Date(selectedDate.value);
    newDate.setDate(newDate.getDate() - 1);
    selectedDate.value = newDate;
    emit('update:date', newDate);
  }
};

const nextDate = () => {
  const newDate = new Date(selectedDate.value);
  newDate.setDate(newDate.getDate() + 1);
  selectedDate.value = newDate;
  emit('update:date', newDate);
};

const isPrevDateDisabled = computed(() => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selected = new Date(selectedDate.value);
  selected.setHours(0, 0, 0, 0);

  return selected <= today;
});
</script>

<template>
  <div class="date-selector">
    <v-btn icon @click="prevDate" :disabled="isPrevDateDisabled">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>

    <v-text class="date-display">
      {{ formatDate(selectedDate) }}
    </v-text>

    <v-btn icon @click="nextDate">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<style scoped>
.date-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  position: relative;
}

.date-display {
  font-weight: bold;
  margin: 0 10px;
  font-size: 1.2em;
  position: relative;
  z-index: 2;
}
</style>
