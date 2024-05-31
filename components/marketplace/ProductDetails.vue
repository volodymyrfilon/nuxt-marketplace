<template>
	<div class="card container">
		<div class="card__grid">
			<div class="card__image-container">
				<img :src="product.image" alt="Product image" class="card__image" />
			</div>
			<div class="card__details">
				<h2 class="card__title">{{ product.title }}</h2>
				<p class="card__price">Price - ${{ product.price }}</p>
				<h3 class="card__description-title">Product description:</h3>
				<p class="card__description">{{ product.description }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue'

const { product } = defineProps(['product'])
</script>

<style scoped lang="scss">
.card {
	min-height: calc(100vh - 240px);
	display: flex;
	align-items: center;
	padding: 1rem;
	text-align: center;

	&__grid {
		display: block;
	}

	&__image-container,
	&__details {
		padding: 0;
	}

	&__image {
		width: 100%;
		max-width: 100%;
		margin: 0 auto;
		display: block;
	}

	&__title {
		font-size: 1.5rem;
		margin: 1rem 0;
	}

	&__price {
		font-size: 1rem;
		margin: 1rem 0;
	}

	&__description-title {
		font-weight: bold;
		border-bottom: 2px solid;
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
	}

	&__description {
		margin-bottom: 1.75rem;
	}

	@media (min-width: 768px) {
		.card {
			padding: 2rem;
			text-align: left;
		}

		&__grid {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}

		&__image-container,
		&__details {
			padding: 1rem;
		}

		&__image {
			max-width: 400px;
		}

		&__title {
			font-size: 2rem;
			margin: 1.75rem 0;
		}

		&__price {
			font-size: 1.25rem;
			margin: 1.75rem 0;
		}
	}

	@media (min-width: 1024px) {
		.card {
			padding: 3rem;
		}

		&__grid {
			gap: 2rem;
		}
	}

	@media (min-width: 1440px) {
		.card {
			padding: 4rem;
		}
	}
}
</style>
