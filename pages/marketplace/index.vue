<template>
	<div class="container marketplace">
		<h1 class="marketplace__title title">Marketplace</h1>
		<ProductList :products="products" />
	</div>
</template>

<script setup>
import ProductList from '@/components/marketplace/ProductList.vue'
import { useStore } from '@/stores'
import { computed, onMounted } from 'vue'

const store = useStore()

onMounted(() => {
	store.fetchProducts()
})

const products = computed(() => store.products)
</script>

<style scoped>
.marketplace__title {
	text-align: center;
}
</style>
