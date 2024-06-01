<template>
	<div class="card">
		<img class="card__thumb" :src="product.image" alt="Product thumb" />
		<NuxtLink
			class="card__title"
			@click="setSelectedProductId"
			:to="`/marketplace/${product.id}`"
		>
			{{ product.title }}
		</NuxtLink>
		<div class="card__price">${{ product.price }}</div>
		<CartControls class="card__controls" :productId="product.id" />
	</div>
</template>

<script setup>
import { useStore } from '~/stores'
import CartControls from './CardControls.vue'

const { product } = defineProps(['product'])
const store = useStore()

const setSelectedProductId = () => {
	store.selectedProduct = product
}
</script>

<style lang="scss" scoped>
.card {
	position: relative;
	width: 100%;
	padding: 12px 16px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	transition: all 0.3s ease;
	display: flex;
	flex-direction: column;
	border-radius: 16px;
	background-color: white;
	gap: 20px;
	&:hover {
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
		transform: scale(102%);
	}

	&__thumb {
		width: 100%;
		height: 200px;
		object-fit: contain;
	}

	&__price {
		position: absolute;
		top: 12px;
		right: 20px;
		padding: 8px 12px;
		background-color: #ddefff;
		border-radius: 12px;
		font-weight: 600;
	}

	&__title {
		font-size: 18px;
		&:hover {
			color: #3b9de8;
		}
	}

	&__button,
	&__controls {
		margin-top: auto;
	}
}

@media (min-width: 576px) {
	.card {
		min-height: 320px;
		width: 195px;
	}
}

@media (min-width: 1024px) {
	.card {
		width: 250px;
	}
}
</style>
