<template>
	<div class="container page cart">
		<h1 class="cart__title title">Your Cart</h1>
		<div v-if="store.cart.length === 0" class="cart__empty">
			<h2 class="cart__empty-title">
				There are no products in the cart yet :(
			</h2>
			<NuxtLink to="/marketplace" class="cart__empty-link">
				<Button
					data="Go to Marketplace"
					ariaLabel="Go to Marketplace"
					class="cart__button cart__empty-button"
				/>
			</NuxtLink>
		</div>
		<div v-if="store.cart.length > 0" class="cart__results">
			<h2 class="cart__total">Total: {{ totalPrice }}$</h2>
			<Button
				:disabled="paymentConfirmed"
				data="Confirm payment"
				ariaLabel="Confirm payment"
				class="cart__button cart__button-payment"
				@click="confirmPayment"
			/>
		</div>
		<div v-if="store.cart.length > 0" class="cart__list">
			<ProductCard
				v-for="product in store.cart"
				:key="product.id"
				:product="product"
			/>
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
import { useStore } from '~/stores'

useHead({
	title: 'Nuxt Markeplace | Cart',
	meta: [{ name: 'description', content: 'Nuxt Markeplace | Cart' }],
})

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
	&__empty,
	&__results {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	&__list {
		display: flex;
		flex-direction: column;
		gap: 16px;
		justify-content: center;
		align-items: center;
	}

	&__button {
		width: 230px;
	}

	&__confirmation-message {
		color: green;
		font-size: 20px;
		font-weight: bold;
		text-align: center;
	}
}

@media (min-width: 480px) {
	.cart {
		&__list {
			flex-direction: row;
			flex-wrap: wrap;
			align-items: unset;
		}
	}
}
</style>
