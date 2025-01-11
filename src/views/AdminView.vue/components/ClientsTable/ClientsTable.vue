<script setup>
import BaseTable from '@/components/BaseTable/BaseTable.vue';

const tableHeaders = [
  { title: 'Name', value: 'name' },
  { title: 'Phone Number', value: 'phoneNumber' },
  { title: 'Car Number', value: 'carNumber' },
  { title: '', value: 'action', sortable: false },
];

const tableItems = [
  { name: 'John Doe', phoneNumber: '1234567890', carNumber: 'XYZ123' },
  { name: 'Jane Smith', phoneNumber: '9876543210', carNumber: 'ABC456' },
];

const handleCreateNewItemModal = (item) => {
  console.log(item);
  alert('Created!'); // todo: request to create client
  // todo: clear after creating
};

const handleEdit = (item) => {
  console.log(item);
  alert('Saved!'); // todo: request to save client
};

const handleDelete = (item) => {
  console.log(item);
  alert(`Delete - ${item.name}`); // todo: request to delete client
};
</script>

<template>
  <BaseTable
    title="Clients:"
    :headers="tableHeaders"
    :items="tableItems"
    :showCreateButton="true"
    :showEdit="true"
    :showDelete="true"
    searchKey='carNumber'
    searchLabel='Search by car number'
    @handleCreateNewItemModal="handleCreateNewItemModal"
    @handleEdit="handleEdit"
    @handleDelete="handleDelete"
  />
</template>
