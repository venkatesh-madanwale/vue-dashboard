<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">
      Welcome to Admin Dashboard
    </h1>
    <div class="bg-white shadow-md rounded p-4 max-w-md">
      <p>
        <strong>Name: {{ authStore.user?.name }}</strong>
      </p>
      <p>
        <strong>Email: {{ authStore.user?.email }}</strong>
      </p>
      <p>
        <strong>Role: {{ authStore.user?.role }}</strong>
      </p>
    </div>
  </div>
</template>

<!-- <script lang="ts" setup>
import { useAuthStore } from "../stores/auth"
import { storeToRefs } from "pinia"

const authStore = useAuthStore()
</script> -->
<script lang="ts" setup>
import { useAuthStore } from "../stores/auth"
import { useRouter } from "vue-router"
import { onMounted } from "vue"

const authStore = useAuthStore()
const router = useRouter()

onMounted(() => {
  const user = authStore.user

  // If no user or not admin, redirect
  if (!user || user.role !== 'admin') {
    alert('Access denied. Admins only.')
    router.push('/')
  }
})
</script>