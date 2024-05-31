import { defineStore } from 'pinia'
import type { CartProduct } from '~/types/cartProduct'
import type { Product } from '~/types/product'

export const useStore = defineStore('store', {
	state: () => ({
		products: [] as Product[],
		selectedProduct: {} as Product,
		cart: [] as CartProduct[],
	}),
	getters: {
		totalPrice(state) {
			return state.cart
				.reduce(
					(total, product) =>
						total + parseFloat(product.price) * product.quantity,
					0
				)
				.toFixed(2)
		},
		getProductById: state => (productId: number) => {
			return state.products.find(product => product.id === productId)
		},
	},
	actions: {
		async fetchProducts() {
			try {
				const response = await fetch('https://fakestoreapi.com/products')
				const data = await response.json()
				if (data) {
					this.products = data
				} else {
					console.error('Failed to fetch products: data is undefined')
				}
			} catch (error) {
				console.error('Failed to fetch products:', error)
			}
		},
		addToCart(productId: number) {
			const cartProduct = this.cart.find(item => item.id === productId)
			if (cartProduct) {
				cartProduct.quantity++
			} else {
				const product = this.getProductById(productId)
				if (product) {
					this.cart.push({ ...product, quantity: 1 })
				} else {
					console.error('Product not found!')
				}
			}
		},
		removeFromCart(productId: number) {
			this.cart = this.cart.filter(item => item.id !== productId)
		},
		incrementProductQuantity(productId: number) {
			const cartProduct = this.cart.find(item => item.id === productId)
			if (cartProduct) {
				cartProduct.quantity++
			}
		},
		decrementProductQuantity(productId: number) {
			const cartProduct = this.cart.find(item => item.id === productId)
			if (cartProduct && cartProduct.quantity > 1) {
				cartProduct.quantity--
			} else if (cartProduct && cartProduct.quantity === 1) {
				this.removeFromCart(productId)
			}
		},
		clearCart() {
			this.cart = []
		},
	},
	persist: {
		paths: ['cart'],
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
