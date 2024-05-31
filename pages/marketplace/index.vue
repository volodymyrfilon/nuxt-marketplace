<template>
	<div class="container marketplace">
		<h1 class="marketplace__title title">Marketplace</h1>
		<ProductList :products="products" />
	</div>
</template>

<script setup>
import ProductList from '@/components/marketplace/ProductList.vue'
import { computed, onMounted } from 'vue'
import { useStore } from '~/store'

const store = useStore()

onMounted(() => {
	store.fetchProducts()
})

const products = computed(() => store.products)
</script>

<style lang="scss" scoped>
.marketplace {
	min-height: 80vh;
	display: flex;
	flex-direction: column;
	gap: 32px;
	&__title {
		text-align: center;
	}
}
</style>
