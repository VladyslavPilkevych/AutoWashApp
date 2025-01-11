<script setup>
import { ref, defineProps } from 'vue';
import TableComponent from '@/components/TableComponent/TableComponent.vue';
import ReservationModal from '../ReservationModal/ReservationModal.vue';

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

const showReservationModal = ref(false);
const selectedItem = ref(null);

const openReservationModal = (item) => {
  selectedItem.value = { ...item };
  showReservationModal.value = true;
};

const actions = [
  {
    label: 'Create reservation',
    onClick: (item) => openReservationModal(item),
  },
];

const handleReservationFn = (item) => {
  showReservationModal.value = false;
  alert('Reservation!');
};
</script>

<template>
  <div class="full-width-container">
    <TableComponent
      :headers="headers"
      :items="items"
      :actionButtons="actions"
      :enableSearch="true"
      searchKey="address"
      searchLabel="Search by address"
    />
    <ReservationModal
      :item="selectedItem"
      :headers="headers"
      :showReservationModal="showReservationModal"
      @close="showReservationModal = false"
      @save="handleReservationFn"
    />
  </div>
</template>

<style scoped>
.full-width-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
