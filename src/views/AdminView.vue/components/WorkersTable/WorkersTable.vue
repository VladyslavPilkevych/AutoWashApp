<script setup>
import BaseTable from '@/components/BaseTable/BaseTable.vue';

const tableHeaders = [
  { title: 'Name', value: 'name' },
  { title: 'Count of washed cars', value: 'count' },
  { title: '', value: 'action', sortable: false },
];

const tableItems = [
  { name: 'Joe Biden', count: 5 },
  { name: 'Maxim', count: 8 },
];

const handleCreateNewItemModal = (item) => {
  console.log(item);
  alert('Created!'); // todo: request to create worker
  // todo: clear after creating
};

const handleEdit = (item) => {
  console.log(item);
  alert('Saved!'); // todo: request to save worker
};

const handleDelete = (item) => {
  console.log(item);
  alert(`Delete - ${item.name}`); // todo: request to delete worker
};
</script>

<template>
  <BaseTable
    title="Workers:"
    :headers="tableHeaders"
    :items="tableItems"
    :showCreateButton="true"
    :showEdit="false"
    :showDelete="true"
    searchKey="name"
    searchLabel="Search by Name"
    @handleCreateNewItemModal="handleCreateNewItemModal"
    @handleEdit="handleEdit"
    @handleDelete="handleDelete"
  />
</template>
