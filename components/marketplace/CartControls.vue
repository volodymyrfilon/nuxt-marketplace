<template>
	<div class="cart-controls">
		<div class="cart-controls__quantity-group">
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
			@click="removeFromCart"
			:data="'Remove'"
			:aria-label="'Remove from cart'"
			class="cart-controls__button cart-controls__button_remove-from-cart"
		/>
	</div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue'
import { computed } from 'vue'
import { useStore } from '~/stores'

const { productId } = defineProps(['productId'])
const store = useStore()

const cartProductQuantity = computed(() => {
	const cartProduct = store.cart.find(
		cartProduct => cartProduct.id === productId
	)
	return cartProduct ? cartProduct.quantity : 0
})

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
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
}

.cart-controls__quantity-group {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.cart-controls__button {
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
</style>
