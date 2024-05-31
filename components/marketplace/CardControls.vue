<template>
	<div class="cart-controls">
		<Button
			v-if="!isProductInCart"
			@click="addToCart"
			:data="'Add to cart'"
			:aria-label="'Add to cart'"
			class="card__button"
		/>
		<div class="cart-controls__quantity-group" v-if="isProductInCart">
			<Button
				@click="decrementQuantity"
				:data="'-'"
				:aria-label="'Decrease quantity'"
				class="cart-controls__button cart-controls__button_minus"
			/>
			{{ cartProductQuantity }}
			<Button
				@click="incrementQuantity"
				:data="'+'"
				:aria-label="'Increase quantity'"
				class="cart-controls__button cart-controls__button_plus"
			/>
		</div>
		<Button
			v-if="isProductInCart"
			@click="removeFromCart"
			:data="'Remove'"
			:aria-label="'Remove from cart'"
			class="cart-controls__button cart-controls__button_remove-from-cart"
		/>
	</div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue'
import { computed, defineProps } from 'vue'
import { useStore } from '~/stores'

const { productId } = defineProps(['productId'])
const store = useStore()

const isProductInCart = computed(() => {
	return store.cart.some(cartProduct => cartProduct.id === productId)
})

const cartProductQuantity = computed(() => {
	const cartProduct = store.cart.find(
		cartProduct => cartProduct.id === productId
	)
	return cartProduct ? cartProduct.quantity : 0
})

const addToCart = () => {
	store.addToCart(productId)
}

const removeFromCart = () => {
	store.removeFromCart(productId)
}

const incrementQuantity = () => {
	store.incrementProductQuantity(productId)
}

const decrementQuantity = () => {
	store.decrementProductQuantity(productId)
}
</script>

<style scoped lang="scss">
.cart-controls {
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 10px;

	&__quantity-group {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	&__button {
		&_remove-from-cart {
			background-color: salmon;
			width: 100px;
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
</style>
