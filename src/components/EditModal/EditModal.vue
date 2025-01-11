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
  showEditModal: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['close', 'save']);

const editableItem = ref({ ...props.item });

const editableHeaders = computed(() => {
  return props.headers.filter((header) => header.value !== 'action');
});

const handleSave = () => {
  emit('save', editableItem.value);
  emit('close');
};

const handleClose = () => {
  emit('close');
};

watch(
  () => props.item,
  (newVal) => {
    editableItem.value = { ...newVal };
  },
  { immediate: true }
);
</script>

<template>
  <v-dialog v-model="props.showEditModal" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Edit Item</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            v-for="header in editableHeaders"
            :key="header.value"
            v-model="editableItem[header.value]"
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