<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  enableSearch: {
    type: Boolean,
    default: false,
  },
  searchLabel: {
    type: String,
    default: 'Search',
  },
  searchKey: {
    type: String,
    default: '',
  },
  actionButtons: {
    type: Array,
    default: () => [],
  },
});

const search = ref('');

const filteredItems = computed(() => {
  if (!search.value || !props.searchKey) {
    return props.items;
  }
  const searchTerm = search.value.toLowerCase();
  return props.items.filter((item) =>
    item[props.searchKey].toLowerCase().includes(searchTerm)
  );
});
</script>

<template>
  <v-card>
    <v-text-field
      v-if="enableSearch"
      v-model="search"
      :label="searchLabel"
      class="mx-4"
      append-icon="mdi-magnify"
      clearable
    ></v-text-field>

    <v-data-table
      :headers="headers"
      :items="filteredItems"
      :items-per-page="-1"
      class="elevation-1"
      hide-default-footer
    >
      <template v-slot:item.action="{ item }">
        <v-btn
          v-for="(action, index) in actionButtons"
          :key="index"
          @click="action.onClick(item)"
          small
          color="primary"
        >
          {{ action.label }}
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<style scoped>
.v-btn {
  margin: 0 16px;
}
</style>
