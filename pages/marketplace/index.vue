<template>
	<div class="container marketplace">
		<h1 class="marketplace__title title">Marketplace</h1>
		<ProductList :products="products" />
	</div>
</template>

<script setup>
import ProductList from '@/components/marketplace/ProductList.vue'
import { useStore } from '~/store'
import { computed, onMounted } from 'vue'

const store = useStore()

onMounted(() => {
	store.fetchProducts()
})

const products = computed(() => store.products)
</script>

<style lang="scss" scoped>
.marketplace {
	min-height: 90vh;
	&__title {
		text-align: center;
	}
}
</style>
