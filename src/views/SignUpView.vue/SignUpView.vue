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

// todo:  implement function when BE ready
// const signUp = () => {
// fetch("http://localhost:4001/users/signup", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ password: `${password.value}` }),
// })
//   .then((response) => {
//     console.log(response);
//     if (!response.ok) {
//       return response.text().then((text) => {
//         paragraphText.value = text + password.value;
//         throw new Error(
//           `Server responded with error: "${text}" code ${response.status}`
//         );
//       });
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.error(error);
//   });
// };

const procesSignUp = (user) => {
  alert("Sign Up!");
};
</script>

<template>
  <main>
    <BaseForm
      title="Sign Up"
      :inputs="formInputs"
      @processUserAccess="procesSignUp"
      subtitle="Already have an account? "
      link="/signin"
      linkText="Sign In"
    />
  </main>
</template>

<style scoped>
h1 {
  margin: 16px;
}
</style>
