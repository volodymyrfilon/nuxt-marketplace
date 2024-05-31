<template>
	<div class="cart container">
		<h1 class="cart__title title">Your Cart</h1>
		<div v-if="store.cart.length === 0" class="cart__empty">
			<h2>There are no products in the cart yet :(</h2>
			<NuxtLink to="/marketplace" class="cart__empty-link">
				<Button
					data="Go to Marketplace"
					ariaLabel="Go to Marketplace"
					class="cart__button cart__empty-button"
				/>
			</NuxtLink>
		</div>
		<div v-else class="cart__list">
			<ProductCard
				v-for="product in store.cart"
				:key="product.id"
				:product="product"
			/>
		</div>
		<div v-if="store.cart.length > 0" class="cart__results">
			<h2 class="cart__total">Total: {{ totalPrice }}$</h2>
			<div class="cart__button-wrapper">
				<Button
					:disabled="paymentConfirmed"
					data="Confirm payment"
					ariaLabel="Confirm payment"
					class="cart__button cart__button-payment"
					@click="confirmPayment"
				/>
			</div>
		</div>
		<div v-if="paymentConfirmed" class="cart__confirmation-message">
			Payment Confirmed!
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue'
import ProductCard from '~/components/marketplace/ProductCard.vue'
import Button from '~/components/ui/Button.vue'
import { useStore } from '~/stores/index'

const store = useStore()
const paymentConfirmed = ref(false)

const totalPrice = computed(() => {
	return store.totalPrice
})

const confirmPayment = () => {
	paymentConfirmed.value = true
	store.clearCart()
	setTimeout(() => {
		paymentConfirmed.value = false
	}, 3000)
}
</script>

<style lang="scss" scoped>
.cart {
	display: flex;
	flex-direction: column;
	gap: 32px;
	min-height: 80vh;
	padding: 16px;

	&__title {
		margin-top: 20px;
	}

	&__empty {
		margin-top: 50px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;

		&-link {
			margin-top: 20px;
		}
	}

	&__button-wrapper {
		position: relative;
		width: 200px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__button {
		width: 100%;
	}

	&__list {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;

		@media (min-width: 480px) {
			flex-direction: row;
			flex-wrap: wrap;
			gap: 16px;
		}
	}

	&__results {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;

		@media (min-width: 480px) {
			flex-direction: row;
			justify-content: center;
			gap: 32px;
			align-items: center;
		}
	}

	&__total {
		font-size: 24px;
		font-weight: bold;
	}

	&__confirmation-message {
		text-align: center;
		font-size: 24px;
		color: green;
		font-weight: bold;
		animation: fadeIn 1s ease-in-out;
		margin-top: 16px;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
}
</style>
