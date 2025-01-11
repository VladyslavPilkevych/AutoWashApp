<script setup>
import { ref, watch, computed } from 'vue';
import { useUserReservationDataStore } from '@/stores/userReservationDataStore';
import ToastNotification from '@/components/ToastNotification/ToastNotification.vue';
import { CarWashes, ActiveWash } from './components';

const userReservationStore = useUserReservationDataStore();

const isVisibleActiveReservation = ref(true);

const toast = ref(null);

const activeAddress = computed(
  () => userReservationStore.userActiveDateTime?.address ?? ''
);
const activePhone = computed(
  () => userReservationStore.userActiveDateTime?.phone ?? ''
);
const activeDate = computed(
  () => userReservationStore.userActiveDateTime?.date ?? ''
);
const activeTime = computed(
  () => userReservationStore.userActiveDateTime?.time ?? ''
);

watch(
  () => ({
    address: userReservationStore.userActiveDateTime.address,
    phone: userReservationStore.userActiveDateTime.phone,
    date: userReservationStore.userActiveDateTime.date,
    time: userReservationStore.userActiveDateTime.time,
  }),
  ({ address, phone, date, time }) => {
    if (address && phone && date && time) {
      isVisibleActiveReservation.value = true;
      if (toast.value) {
        toast.value.show('Success!');
      }
    } else {
      isVisibleActiveReservation.value = false;
    }
  },
  { immediate: true }
);

function handleCloseActiveReservation() {
  isVisibleActiveReservation.value = false;
  alert('Close');
}

const headers = [
  { title: 'Address', value: 'address' },
  { title: 'Phone Number', value: 'phoneNumber' },
  { title: '', value: 'action', sortable: false },
];

const items = [
  { address: 'Mlade Grunty 53', phoneNumber: '128371982' },
  { address: 'Nove Mesto 17', phoneNumber: '128371982' },
];
</script>

<template>
  <main>
    <h1>User Page</h1>
    <ToastNotification ref="toast" />
    <div class="d-flex flex-column">
      <ActiveWash
        :address="activeAddress"
        :number="activePhone"
        :date="activeDate"
        :time="activeTime"
        :isVisible="isVisibleActiveReservation"
        :onClose="handleCloseActiveReservation"
      />
      <CarWashes :headers="headers" :items="items" />
    </div>
  </main>
</template>

<style scoped>
h1 {
  margin: 16px;
}
.flex-column {
  gap: 24px;
}
</style>
