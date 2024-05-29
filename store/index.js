import { createStore } from 'vuex'

const store = createStore({
	state: {
		isMenuOpen: false,
		products: [],
		cart: [],
	},
	mutations: {
		toggleMenu(state) {
			state.isMenuOpen = !state.isMenuOpen
		},
		setProducts(state, products) {
			state.products = products
		},
		addToCart(state, product) {
			state.cart = [...state.cart, product]
		},
		removeFromCart(state, productId) {
			state.cart = state.cart.filter(p => p.id !== productId)
		},
	},
	actions: {
		fetchProducts({ commit }) {
			const products = [
				{ id: 1, name: 'Product 1', price: 100 },
				{ id: 2, name: 'Product 2', price: 200 },
			]
			commit('setProducts', products)
		},
	},
	getters: {
		isMenuOpen: state => state.isMenuOpen,
		products: state => state.products,
		cart: state => state.cart,
		cartTotal: state =>
			state.cart.reduce((total, product) => total + product.price, 0),
	},
})

export default store
