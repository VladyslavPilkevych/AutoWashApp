<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ClientsTable, StorehouseTable, WorkersTable } from './components';

const route = useRoute();
const router = useRouter();

const tab = ref(
  route.path.includes('clients')
    ? 'option-clients'
    : route.path.includes('workers')
    ? 'option-workers'
    : 'option-storehouse'
);

watch(tab, (newTab) => {
  switch (newTab) {
    case 'option-storehouse':
      router.push('/admin/storehouse');
      break;
    case 'option-clients':
      router.push('/admin/clients');
      break;
    case 'option-workers':
      router.push('/admin/workers');
      break;
  }
});
</script>

<template>
  <main>
    <h1>Admin Page</h1>
    <div class="d-flex flex-row">
      <v-tabs v-model="tab" color="primary" direction="vertical">
        <v-tab
          prepend-icon="mdi-garage-variant"
          text="Storehouse"
          value="option-storehouse"
        ></v-tab>
        <v-tab
          prepend-icon="mdi-account-group"
          text="Clients"
          value="option-clients"
        ></v-tab>
        <v-tab
          prepend-icon="mdi-account-hard-hat"
          text="Workers"
          value="option-workers"
        ></v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab" class="tab-content">
        <v-tabs-window-item value="option-storehouse">
          <StorehouseTable />
        </v-tabs-window-item>
        <v-tabs-window-item value="option-clients">
          <ClientsTable />
        </v-tabs-window-item>
        <v-tabs-window-item value="option-workers">
          <WorkersTable />
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
  </main>
</template>

<style scoped>
h1 {
  margin: 16px;
}
.tab-content {
  flex: 1;
  padding: 16px;
}
</style>
