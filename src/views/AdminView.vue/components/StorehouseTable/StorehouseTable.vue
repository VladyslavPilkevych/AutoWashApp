<script setup>
import BaseTable from '@/components/BaseTable/BaseTable.vue';

const tableHeaders = [
  { title: 'Name', value: 'name' },
  { title: 'Count on Storage', value: 'countOnStorage' },
  { title: '', value: 'action', sortable: false },
];

const tableItems = [
  { name: 'Product A', countOnStorage: 20 },
  { name: 'Product B', countOnStorage: 15 },
];

const handleCreateNewItemModal = (item) => {
  console.log(item);
  alert('Created!'); // todo: request to create item in storehouse
  // todo: clear after creating
};

const handleEdit = (item) => {
  console.log(item);
  alert('Saved!'); // todo: request to save item in storehouse
};

const handleDelete = (item) => {
  console.log(item);
  alert(`Delete - ${item.name}`); // todo: request to delete item in storehouse
};
</script>

<template>
  <BaseTable
    title="Storehouse:"
    :headers="tableHeaders"
    :items="tableItems"
    :showCreateButton="true"
    :showEdit="true"
    :showDelete="true"
    searchKey='name'
    searchLabel='Search by name'
    @handleCreateNewItemModal="handleCreateNewItemModal"
    @handleEdit="handleEdit"
    @handleDelete="handleDelete"
  />
</template>
