<template>
	<div class="cart-dialog">
		<h2 class="cart-dialog__title">Your Cart</h2>

		<h3 class="cart-dialog__empty" v-if="store.cart.length === 0">
			There are no products in the cart yet :(
		</h3>

		<div class="cart-dialog__list" v-else>
			<h3 class="cart-dialog__list-total">Total: ${{ totalPrice }}</h3>
			<NuxtLink to="/marketplace/cart" class="cart-dialog__list-link">
				<Button
					class="cart-dialog__list-button"
					data="Go to cart"
					ariaLabel="Go to cart"
				/>
			</NuxtLink>
			<ProductCard
				class="cart-dialog__list-card"
				v-for="product in store.cart"
				:key="product.id"
				:product="product"
			/>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue'
import ProductCard from '~/components/marketplace/ProductCard.vue'
import Button from '~/components/ui/Button.vue'
import { useStore } from '~/stores'

const store = useStore()
const paymentConfirmed = ref(false)

const totalPrice = computed(() => {
	return store.totalPrice
})
</script>

<style lang="scss">
.cart-dialog {
	position: absolute;
	top: 70px;
	right: 0;
	padding: 16px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 16px;
	width: 350px;
	border: 1px solid lightgray;
	background-color: #f1f1f1;
	border-radius: 20px;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
	z-index: 4;
	transition: opacity 0.3s ease, visibility 0.3s ease;

	&__empty {
		text-align: center;
		margin: 0;
	}

	&__list {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-height: 300px;
		overflow-y: auto;
		width: 100%;
		gap: 16px;

		&-total {
			margin: 0;
		}
	}

	&__list-button {
		width: 100%;
		background-color: #3b9de8;
	}
}

@media (min-width: 768px) {
	.cart-dialog {
		display: flex;
	}
}
</style>
