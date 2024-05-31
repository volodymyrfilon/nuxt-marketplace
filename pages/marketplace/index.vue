<template>
	<div class="container page marketplace">
		<h1 class="marketplace__title title">Marketplace</h1>
		<Loader v-if="products.length === 0" class="marketplace__loader" />
		<ProductList
			v-else
			:products="products"
			class="marketplace__product-list"
		/>
	</div>
</template>
<script setup>
import { computed, onMounted } from 'vue'
import ProductList from '~/components/marketplace/ProductList.vue'
import { useStore } from '~/stores'

const store = useStore()
const products = computed(() => store.products || [])

const loadProducts = async () => {
	await store.fetchProducts()
}

onMounted(async () => {
	await loadProducts()
})
</script>

<style lang="scss" scoped>
.marketplace {
	&__loader {
		height: 50vh;
	}
}
</style>
