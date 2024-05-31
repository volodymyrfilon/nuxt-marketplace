<template>
	<div class="product-list container">
		<div class="product-list__cards-list">
			<ProductCard
				v-for="product in products"
				:key="product.id"
				:product="product"
			/>
		</div>
	</div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

const { products } = defineProps(['products'])
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
