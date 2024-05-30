<template>
	<div class="card">
		<img :src="product.image" alt="Product thumb" class="card__thumb" />
		<NuxtLink
			@click="setSelectedProductId"
			:to="`/marketplace/${product.id}`"
			class="card__title"
		>
			{{ product.title }}
		</NuxtLink>
		<div class="card__price">${{ product.price }}</div>
		<Button
			v-if="!isProductInCart"
			@click="addToCart"
			:data="'Add to cart'"
			:aria-label="'Add to cart'"
			class="card__button card__button_add-to-cart"
		/>
		<div v-else class="card__button-group">
			<div class="card__button-quantity-group">
				<Button
					@click="decrementQuantity"
					:data="'-'"
					:aria-label="'Decrease quantity'"
					class="card__button card__button_minus"
				/>
				{{ cartProductQuantity }}
				<Button
					@click="incrementQuantity"
					:data="'+'"
					:aria-label="'Increase quantity'"
					class="card__button card__button_plus"
				/>
			</div>
			<Button
				@click="removeFromCart"
				:data="'X'"
				:aria-label="'Remove from cart'"
				class="card__button card__button_remove-from-cart"
			/>
		</div>
	</div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue'
import { useStore } from '~/store'
import { computed } from 'vue'

const { product } = defineProps(['product'])
const store = useStore()

const isProductInCart = computed(() => {
	return store.cart.some(cartProduct => cartProduct.id === product.id)
})

const cartProductQuantity = computed(() => {
	const cartProduct = store.cart.find(
		cartProduct => cartProduct.id === product.id
	)
	return cartProduct ? cartProduct.quantity : 0
})

const setSelectedProductId = () => {
	store.selectedProduct = product
}

const addToCart = () => {
	store.addToCart(product)
}

const removeFromCart = () => {
	store.removeFromCart(product.id)
}

const incrementQuantity = () => {
	store.incrementProductQuantity(product.id)
}

const decrementQuantity = () => {
	store.decrementProductQuantity(product.id)
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

	&__button-group {
		margin-top: auto;
		display: flex;
		justify-content: space-between;
	}

	&__button-quantity-group {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	&__button {
		&_add-to-cart {
			margin-top: auto;
		}
		&_remove-from-cart {
			background-color: salmon;
			width: 90px;
		}
		&_minus {
			background-color: salmon;
			width: 40px;
		}
		&_plus {
			background-color: lightgreen;
			width: 40px;
		}
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
