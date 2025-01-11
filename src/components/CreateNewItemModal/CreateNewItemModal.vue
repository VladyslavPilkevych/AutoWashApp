<script setup>
import { ref, watch, computed } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  headers: {
    type: Array,
    required: true,
  },
  showCreateNewItemModal: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['close', 'save']);

const newItem = ref({ ...props.item });

const existingHeaders = computed(() => {
  return props.headers.filter((header) => header.value !== 'action');
});

const handleSave = () => {
  emit('save', newItem.value);
  emit('close');
};

const handleClose = () => {
  emit('close');
};

watch(
  () => props.item,
  (newVal) => {
    newItem.value = { ...newVal };
  },
  { immediate: true }
);
</script>

<template>
  <v-dialog v-model="props.showCreateNewItemModal" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Create New Item</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            v-for="header in existingHeaders"
            :key="header.value"
            v-model="newItem[header.value]"
            :label="header.title"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="handleSave">Save</v-btn>
        <v-btn color="secondary" text @click="handleClose">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.v-card-title {
  display: flex;
  justify-content: space-between;
}
</style>