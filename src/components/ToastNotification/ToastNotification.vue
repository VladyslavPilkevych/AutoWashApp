<script setup>
import { ref } from 'vue';

const showToast = ref(false);
const message = ref('');
const timeout = 3000;

const show = (msg) => {
  message.value = msg;
  showToast.value = true;

  setTimeout(() => {
    showToast.value = false;
  }, timeout);
};

defineExpose({ show });
</script>

<template>
  <v-snackbar v-model="showToast" :timeout="timeout" top right color="success">
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn color="white" text v-bind="attrs" @click="showToast = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped>
.v-snackbar {
  position: fixed;
  top: 16px;
  right: 16px;
}
</style>
