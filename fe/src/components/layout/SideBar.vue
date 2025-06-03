<template>
  <aside class="w-64 h-screen bg-gray-800 text-white flex flex-col">
    <div class="text-2xl font-bold p-6 border-b border-gray-700">
      Dashboard
    </div>
    <nav class="flex-1 p-4">
      <ul class="space-y-4">
        <li>
          <router-link to="/" class="block hover:text-blue-300">
            Login
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard" class="block hover:text-blue-300">
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link to="/products" class="block hover:text-blue-300">
            All Products
          </router-link>
        </li>
        <li>
          <router-link to="/products/update" class="block hover:text-blue-300">
            Update Products
          </router-link>
        </li>
        <li>
          <router-link to="/products/add" class="block hover:text-blue-300">
            Add Product
          </router-link>
        </li>
        <li>
          <router-link to="/products/delete" class="block hover:text-blue-300">
            Delete Products
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>
