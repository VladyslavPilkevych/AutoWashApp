<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/admin" class="sign-in_btn"
        ><v-btn variant="text" color="primary">Admin</v-btn></RouterLink
      >
    </nav>
    <nav>
      <RouterLink to="/user" class="sign-in_btn"
        ><v-btn variant="text" color="primary">User</v-btn></RouterLink
      >
    </nav>

    <div class="auth">
      <nav>
        <RouterLink to="/signup" class="sign-in_btn"
          ><v-btn variant="text" color="primary">Sign Up</v-btn></RouterLink
        >
      </nav>
      <nav>
        <RouterLink to="/signin" class="sign-in_btn"
          ><v-btn color="primary">Sign In</v-btn></RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 15px 10px;
  border-bottom: 1px solid grey;
  text-transform: uppercase;
}
.auth {
  display: flex;
  align-items: center;
}
a:visited {
  color: black;
}
.sign-in_btn {
  margin-left: 16px;
}
</style>
