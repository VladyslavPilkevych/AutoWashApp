<script setup>
function handleClick() {
  alert('Button clicked!');
}
</script>

<template>
  <main>
    <h1>Home</h1>
    <v-container class="pa-4">
      <v-card>
        <v-card-title>Example Vuetify</v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="handleClick">Click</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </main>
</template>
