<script setup>
import BaseForm from "@/components/BaseForm/BaseForm.vue";
import { ref } from "vue";

const formInputs = ref([
  {
    title: "Login",
    value: "login",
    rules: [
      (value) => {
        if (value) return true;

        return "You must enter a login.";
      },
    ],
    type: "text",
  },
  {
    title: "Password",
    value: "password",
    rules: [
      (value) => {
        if (value) return true;

        return "You must enter a password.";
      },
    ],
    type: "password",
    visible: false,
  },
]);

const procesSignIn = (user) => {
  alert("Sign In!");
};
</script>

<template>
  <main>
    <BaseForm
      title="Sign In"
      :inputs="formInputs"
      @processUserAccess="procesSignIn"
      subtitle="Don't have an account? "
      link="/signup"
      linkText="Sign Up"
    />
  </main>
</template>

<style scoped>
h1 {
  margin: 16px;
}
</style>
