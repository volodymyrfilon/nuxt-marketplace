<template>
	<div class="container page marketplace" @scroll="handleScroll">
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
import { computed, onMounted, ref, onBeforeUnmount } from 'vue'
import ProductList from '~/components/marketplace/ProductList.vue'
import Loader from '~/components/Loader.vue'
import { useStore } from '~/stores/'

const store = useStore()
const products = computed(() => store.products || [])
const loading = ref(store.loading)

const loadProducts = async () => {
	await store.fetchProducts()
}

const loadMoreProducts = async () => {
	await store.fetchProducts()
}

const handleScroll = () => {
	const bottomOfWindow =
		window.innerHeight + window.scrollY >=
		document.documentElement.offsetHeight - 2
	if (bottomOfWindow && !loading.value) {
		loadMoreProducts()
	}
}

onMounted(async () => {
	await loadProducts()
	window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.marketplace {
	&__loader {
		height: 50vh;
	}
	&__bottom-loader {
		margin-top: 20px;
	}
}
</style>
