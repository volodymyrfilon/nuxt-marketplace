<template>
	<div class="container page details">
		<div class="details__image-container">
			<img :src="product.image" alt="Product image" class="details__image" />
		</div>
		<div class="details__details">
			<h2 class="details__title">
				{{ product.title }}
			</h2>
			<p class="details__price">
				Price - ${{ product.price }}
				<CardControls :productId="product.id" class="details__controls" />
			</p>
			<h3 class="details__description-title">Product description:</h3>
			<p class="details__description">{{ product.description }}</p>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue'
import CardControls from './CardControls.vue'

const { product } = defineProps(['product'])
</script>

<style scoped lang="scss">
.details {
	&__image {
		width: 100%;
		max-width: 100%;
		margin: 0 auto;
		display: block;
	}

	&__description-title {
		font-weight: bold;
		border-bottom: 2px solid;
		padding-bottom: 0.5rem;
	}

	&__controls {
		margin-top: 24px;
		width: 240px;
	}

	@media (min-width: 768px) {
		&__image-container {
			padding: 1rem;
		}

		&__image {
			max-width: 400px;
		}

		&__price {
			font-size: 1.5rem;
		}
	}
}
</style>
