<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">
      Welcome to Admin Dashboard
    </h1>
    <div class="bg-white shadow-md rounded p-4 max-w-md">
      <p>
        <strong>Name: {{ name }}</strong>
      </p>
      <p>
        <strong>Email: {{ email }}</strong>
      </p>
      <p>
        <strong>Role: {{ role }}</strong>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "../stores/auth"
import { storeToRefs } from "pinia"

const authStore = useAuthStore()
const { email, name, role } = storeToRefs(authStore)
</script>




<!-- <template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">
      Welcome to Admin Dashboard
    </h1>
    <div class="bg-white shadow-md rounded p-4 max-w-md">
      <p>
        <strong>Name:{userStore.name}</strong>
      </p>
      <p>
        <strong>Email:{userStore.email}</strong>
      </p>
      <p>
        <strong>Role:{userStore.role}</strong>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
// import { useAuthStore } from "../stores/auth.ts"
// import { storeToRefs } from "pinia"

// const userStore = useAuthStore()
// const { email, name, role } = storeToRefs(useAuthStore)
// const user = {
//   email: email.value,
//   name: name.value,
//   role: role.value
// }
// export default Dashboard;
</script>
 -->