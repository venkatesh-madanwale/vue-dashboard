<template>
    <div>
        <div v-if="loading" class="text-center py-6 text-gray-600">Loading...</div>
        <div v-else-if="error" class="text-center py-6 text-red-600 font-semibold">
            Error: {{ error }}
        </div>
        <div v-else-if="products.length === 0" class="text-center py-6 text-gray-500">
            No products found.
        </div>
        <div class="flex flex-wrap justify-center gap-5 px-4">
            <div v-for="product in products" :key="product._id" @click="goToDetail(product._id)"
                class="max-w-xs w-full bg-white rounded-lg border border-gray-200 shadow-sm cursor-pointer transition-shadow hover:shadow-lg">
                <img :src="`http://localhost:3002/prodimgs/${product.pimg}`" :alt="product.name"
                    class="w-full h-48 object-cover rounded-t-lg" />
                <div class="p-4 text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ product.name }}</h3>
                    <p class="text-indigo-600 font-bold mb-2">₹{{ product.price }}</p>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ product.desc }}</p>
                    <button @click.stop="goToDetail(product._id)"
                        class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                        View Details
                    </button>
                    <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition btn buy-now"
                        @click="handleBuyNow">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '../stores/productStore';

import { useAuthStore } from "../stores/auth"

const authStore = useAuthStore()
const router = useRouter()

onMounted(() => {
  const user = authStore.user

  // If no user or not admin, redirect
  if (!user || user.role !== 'admin') {
    alert('Access denied. Admins only.')
    router.push('/') // Or use router.replace('/login')
  }})


const productStore = useProductStore();
const handleBuyNow = async () => {
    alert("button working");
    return;
}

interface Product {
    _id: string;
    name: string;
    price: number;
    desc: string;
    pimg: string;
}

const products = productStore.products as Product[];
const { loading, error, fetchProducts } = productStore;

onMounted(() => {
    fetchProducts();
});

const goToDetail = (id: string) => {
    router.push(`/products/${id}`);
};
</script>
