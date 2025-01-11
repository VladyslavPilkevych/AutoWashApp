<script setup>
import { ref } from 'vue';
import TableComponent from '@/components/TableComponent/TableComponent.vue';
import EditModal from '@/components/EditModal/EditModal.vue';
import DeleteModal from '@/components/DeleteModal/DeleteModal.vue';
import CreateNewItemModal from '@/components/CreateNewItemModal/CreateNewItemModal.vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  headers: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  showCreateButton: {
    type: Boolean,
    default: true,
  },
  showEdit: {
    type: Boolean,
    default: true,
  },
  showDelete: {
    type: Boolean,
    default: true,
  },
  searchKey: {
    type: String,
    default: 'name',
  },
  searchLabel: {
    type: String,
    default: 'Search by name',
  },
});

const showEditModal = ref(false);
const showDeleteModal = ref(false);
const showCreateNewItemModal = ref(false);
const selectedItem = ref(null);
const newItemModel = ref({ name: '', countOnStorage: '' });

const emit = defineEmits([
  'handleCreateNewItemModal',
  'handleEdit',
  'handleDelete',
]);

const openCreateNewItemModal = () => {
  showCreateNewItemModal.value = true;
};

const openEditModal = (item) => {
  selectedItem.value = { ...item };
  showEditModal.value = true;
};

const openDeleteModal = (item) => {
  selectedItem.value = { ...item };
  showDeleteModal.value = true;
};

const actions = [];
if (props.showEdit) {
  actions.push({
    label: 'Edit',
    onClick: (item) => openEditModal(item),
  });
}
if (props.showDelete) {
  actions.push({
    label: 'Delete',
    onClick: (item) => openDeleteModal(item),
  });
}

const handleCreateNewItemModalFn = (item) => {
  showCreateNewItemModal.value = false;
  emit('handleCreateNewItemModal', item);
};

const handleEditFn = (item) => {
  showEditModal.value = false;
  emit('handleEdit', item);
};

const handleDeleteFn = (item) => {
  showDeleteModal.value = false;
  emit('handleDelete', item);
};
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <v-btn
      v-if="showCreateButton"
      prepend-icon="mdi-plus"
      class="create-new"
      @click="openCreateNewItemModal"
    >
      Create new
    </v-btn>
    <CreateNewItemModal
      :item="newItemModel"
      :headers="headers"
      :showCreateNewItemModal="showCreateNewItemModal"
      @close="showCreateNewItemModal = false"
      @save="handleCreateNewItemModalFn"
    />
    <TableComponent
      :headers="headers"
      :items="items"
      :actionButtons="actions"
      :enableSearch="true"
      :searchKey="props.searchKey"
      :searchLabel="props.searchLabel"
    />
    <EditModal
      :item="selectedItem"
      :headers="headers"
      :showEditModal="showEditModal"
      @close="showEditModal = false"
      @save="handleEditFn"
    />
    <DeleteModal
      :item="selectedItem"
      :showDeleteModal="showDeleteModal"
      @close="showDeleteModal = false"
      @delete="handleDeleteFn"
    />
  </main>
</template>

<style scoped>
h1 {
  margin: 16px;
}
.create-new {
  margin: 16px;
}
</style>
