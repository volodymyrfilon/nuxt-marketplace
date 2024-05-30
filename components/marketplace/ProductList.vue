<template>
	<div class="product-list" v-if="products.length > 0">
		<ProductCard
			v-for="product in products"
			:key="product.id"
			:product="product"
		/>
	</div>
	<Loader v-else class="product-list__loader" />
</template>

<script setup>
import Loader from '../Loader.vue'
import ProductCard from './ProductCard.vue'

const { products } = defineProps({
	products: {
		type: Array,
		required: true,
	},
})
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
}
</style>
