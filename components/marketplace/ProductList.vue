<template>
	<div class="product-list">
		<ProductCard
			v-for="product in products"
			:key="product.id"
			:product="product"
		/>
	</div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
const { products } = defineProps(['products'])
</script>

<style scoped>
.product-list {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
	width: 100%;

	@media (min-width: 480px) {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: unset;
	}
}
</style>
