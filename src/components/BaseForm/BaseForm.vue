<script setup>
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  inputs: {
    type: Array,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  type: {
    type: Boolean,
    default: true,
  },
  linkText: {
    type: String,
    default: "",
  },
});

const newItem = ref({});

const emit = defineEmits(["processUserAccess"]);

const processUserAccessFn = () => {
  const isValid =
    Object.keys(newItem.value).length === props.inputs.length &&
    props.inputs.every((input) => {
      const rules = input.rules || [];
      return rules.every((rule) => rule(newItem.value[input.value]) === true);
    });

  if (isValid) {
    emit("processUserAccess", newItem.value);
  }
};

const getInputType = (input) => {
  if (input.type === "password") {
    return input.visible ? "text" : "password";
  }
  return input.type;
};
</script>

<template>
  <v-sheet class="mx-auto" width="300">
    <h1>{{ title }}</h1>
    <v-form ref="form" @submit.prevent @submit="processUserAccessFn">
      <v-text-field
        v-for="input in inputs"
        :key="input.value"
        :type="getInputType(input)"
        :append-inner-icon="
          input.type == 'password'
            ? input.visible
              ? 'mdi-eye-off'
              : 'mdi-eye'
            : ''
        "
        v-model="newItem[input.value]"
        :rules="input.rules"
        :label="input.title"
        @click:append-inner="
          input.type == 'password' ? (input.visible = !input.visible) : null
        "
      />
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
    <p style="text-align: center; margin: 16px">
      {{ subtitle }}<RouterLink :to="link">{{ linkText }}</RouterLink>
    </p>
  </v-sheet>
</template>

<style scoped>
h1 {
  margin: 16px;
}
</style>
