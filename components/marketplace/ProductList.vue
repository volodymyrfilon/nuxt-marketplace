<template>
	<div class="product-list">
		<ProductCard
			v-for="product in products"
			:key="product.id"
			:product="product"
		/>
	</div>
	<Loader v-if="isLoading" class="product-list__loader" />
	<Button
		v-else
		@click="loadMore"
		class="product-list__button"
		data="Load more"
		ariaLaber="Load more"
	></Button>
</template>

<script setup>
import { ref } from 'vue'

import { useStore } from '~/store'
import Loader from '../Loader.vue'
import Button from '../ui/Button.vue'
import ProductCard from './ProductCard.vue'

const store = useStore()
const isLoading = ref(false)
let products = store.products

const loadProducts = async limit => {
	isLoading.value = true
	await store.fetchProducts(limit)
	isLoading.value = false
	return (products = [...store.products])
}

const loadMore = async () => {
	if (!isLoading.value) {
		await loadProducts(4)
	}
}
</script>

<style scoped>
.product-list {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
	padding: 16px;
	@media (min-width: 480px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
}

.product-list__loader {
	text-align: center;
	height: 300px;
}
.product-list__button {
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	width: 200px;
}
</style>
