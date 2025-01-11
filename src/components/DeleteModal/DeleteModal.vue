<script setup>

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  showDeleteModal: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['close', 'delete']);

const handleDelete = () => {
  emit('delete', props.item);
  emit('close');
};

const handleClose = () => {
  emit('close');
};

</script>

<template>
  <v-dialog v-model="props.showDeleteModal" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Are you shure you want to delete this item ?</span>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="handleDelete">Delete</v-btn>
        <v-btn color="secondary" text @click="handleClose">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
