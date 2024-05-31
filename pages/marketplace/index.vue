<template>
	<div class="container marketplace">
		<h1 class="marketplace__title title">Marketplace</h1>
		<Loader v-if="products.length === 0" class="product-list__loader" />
		<ProductList v-else :products="products" />
	</div>
</template>

<script setup>
import ProductList from '@/components/marketplace/ProductList.vue'
import { useStore } from '~/stores'

const store = useStore()
let products = []

const loadProducts = async () => {
	await store.fetchProducts()
	return (products = store.products)
}

onMounted(async () => {
	await loadProducts()
})
</script>

<style lang="scss" scoped>
.marketplace {
	min-height: 80vh;
	display: flex;
	flex-direction: column;
	gap: 32px;
	&__title {
		text-align: center;
	}
}
</style>
