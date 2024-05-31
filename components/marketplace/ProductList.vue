<template>
	<div class="product-list container">
		<Loader v-if="store.products.length === 0" class="product-list__loader" />
		<div v-else class="product-list__cards-list">
			<ProductCard
				v-for="product in products"
				:key="product.id"
				:product="product"
			/>
		</div>
	</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from '~/store'
import Loader from '../Loader.vue'
import ProductCard from './ProductCard.vue'

const store = useStore()
let products = store.products

const loadProducts = async () => {
	await store.fetchProducts()
	products = [...products, ...store.products]
}

onMounted(async () => {
	await loadProducts()
})
</script>

<style lang="scss" scoped>
.product-list {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;

	&__cards-list {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 16px;
		width: 100%;

		@media (min-width: 480px) {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

	&__loader {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 60vh;
		text-align: center;
	}
}
</style>
