<script setup>
import { ref, defineProps } from 'vue';
import { useUserReservationDataStore } from '@/stores/userReservationDataStore';
import { formatDateToDDMM } from '@/utils/dateUtils';
import DateSelector from '@/components/DateSelector/DateSelector.vue';

const userReservationStore = useUserReservationDataStore();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  showReservationModal: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['close', 'save']);

const handleSave = () => {
  const selectedTime =
    selectedSlot.value !== null
      ? timeSlots.value[selectedSlot.value].label.toString()
      : '';
  userReservationStore.setUserReservationData({
    address: props.item?.address,
    phone: props.item?.phoneNumber,
    date: formatDateToDDMM(selectedDate.value),
    time: selectedTime,
  });
  emit('save', props.item);
  selectedSlot.value = null;
  selectedDate.value = new Date();
  emit('close');
};

const handleClose = () => {
  emit('close');
};

// date

const selectedDate = ref(new Date());

function updateDate(newDate) {
  selectedDate.value = newDate;
}

// timer

const selectedSlot = ref(null);

const timeSlots = ref(generateTimeSlots());

function selectSlot(index) {
  if (selectedSlot.value === index) {
    selectedSlot.value = null;
  } else {
    selectedSlot.value = index;
  }
}

function generateTimeSlots() {
  const slots = [];
  const start = new Date();
  start.setHours(9, 0, 0, 0);

  for (let i = 0; i < 16; i++) {
    const end = new Date(start.getTime() + 30 * 60 * 1000);
    slots.push({
      label: `${formatTime(start)} - ${formatTime(end)}`,
    });
    start.setTime(end.getTime());
  }

  return slots;
}

function formatTime(date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
</script>

<template>
  <v-dialog v-model="props.showReservationModal" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Choose time and date</span>
      </v-card-title>
      <v-card-text>
        <DateSelector :date="selectedDate" @update:date="updateDate" />
        <v-container>
          <v-row>
            <v-col
              v-for="(slot, index) in timeSlots"
              :key="index"
              cols="12"
              sm="6"
              md="4"
            >
              <v-btn
                :class="{ 'green lighten-1': selectedSlot === index }"
                :disabled="
                  selectedSlot !== null &&
                  selectedSlot !== index &&
                  selectedSlot !== -1
                "
                @click="selectSlot(index)"
                block
              >
                {{ slot.label }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          :disabled="!selectedSlot"
          @click="handleSave"
          >Approve time</v-btn
        >
        <v-btn color="secondary" text @click="handleClose">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.v-btn.green {
  background-color: #4caf50 !important;
  color: white !important;
}
.v-btn:disabled {
  background-color: #bdbdbd !important;
}
</style>
