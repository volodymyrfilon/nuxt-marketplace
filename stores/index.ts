import { defineStore } from 'pinia'
import type { CartProduct } from '~/types/cartProduct'
import type { Product } from '~/types/product'

export const useStore = defineStore('store', {
	state: () => ({
		products: [] as Product[],
		selectedProduct: {} as Product,
		cart: [] as CartProduct[],
		limit: 8,
		skip: 0,
		loading: false,
		initialLoad: true,
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
			if (this.loading) return
			this.loading = true
			try {
				const limit = this.initialLoad ? 20 : this.limit
				const response = await fetch(
					`https://dummyjson.com/products?limit=${limit}&skip=${this.skip}&select=title,price,images,rating`
				)
				if (!response.ok) throw new Error('Network response was not ok')
				const { products } = await response.json()
				if (products) {
					this.products = this.initialLoad
						? products
						: [...this.products, ...products]
					this.skip += limit
					this.initialLoad = false
				} else {
					console.error('Failed to fetch products: products data is undefined')
				}
			} catch (error) {
				console.error('Failed to fetch products:', error)
			} finally {
				this.loading = false
			}
		},
		async fetchProductById(id: number) {
			if (this.loading) return
			this.loading = true
			try {
				const response = await fetch(
					`https://dummyjson.com/products/${id}?select=title,price,images,rating,description`
				)
				if (!response.ok) throw new Error('Network response was not ok')
				const data = await response.json()
				if (data) {
					this.selectedProduct = { ...data }
				} else {
					console.error('Failed to fetch product: data is undefined')
				}
			} catch (error) {
				console.error(`Failed to fetch product with id ${id}:`, error)
			} finally {
				this.loading = false
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
