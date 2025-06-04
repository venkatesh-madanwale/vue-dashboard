<template>
  <div class="p-6">
    <h2 class="text-xl font-semibold mb-4">User List</h2>

    <div v-if="loading">Loading users...</div>
    <div v-if="error" class="text-red-600">{{ error }}</div>

    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr class="bg-gray-100">
          <th class="py-2 px-4 border">Name</th>
          <th class="py-2 px-4 border">Email</th>
          <th class="py-2 px-4 border">Phone</th>
          <th class="py-2 px-4 border">Role</th>
          <th class="py-2 px-4 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user._id">
          <td class="py-2 px-4 border">{{ user.name }}</td>
          <td class="py-2 px-4 border">{{ user.emailid }}</td>
          <td class="py-2 px-4 border">{{ user.phno }}</td>
          <td class="py-2 px-4 border">{{ user.role }}</td>
          <td class="py-2 px-4 border">
            <button @click="editUser(user)" class="text-blue-600 mr-2">Update</button>
            <button @click="deleteUser(user._id)" class="text-red-600">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="editingUser" class="mt-6">
      <h3 class="text-lg font-bold mb-2">Edit User</h3>
      <form @submit.prevent="submitUpdate">
        <input v-model="form.name" placeholder="Name" class="border p-2 mb-2 block" />
        <input v-model="form.emailid" placeholder="Email" class="border p-2 mb-2 block" />
        <input v-model="form.phno" placeholder="Phone" class="border p-2 mb-2 block" />
        <select v-model="form.role" class="border p-2 mb-2 block">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Save</button>
        <button type="button" @click="cancelEdit" class="ml-2 text-gray-600">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { User, useUserStore } from '../stores/userStore';

const store = useUserStore();
const { users, loading, error } = store;

const editingUser = ref<User | null>(null);
const form = ref<Partial<User>>({});

onMounted(() => {
  store.fetchUsers();
});

const editUser = (user: User) => {
  editingUser.value = user;
  form.value = { ...user };
};

const cancelEdit = () => {
  editingUser.value = null;
  form.value = {};
};

const submitUpdate = async () => {
  if (editingUser.value && form.value) {
    await store.updateUser(editingUser.value._id, form.value);
    alert('User updated successfully');
    cancelEdit();
  }
};

const deleteUser = async (id: string) => {
  if (confirm('Are you sure you want to delete this user?')) {
    await store.deleteUser(id);
  }
};
</script>