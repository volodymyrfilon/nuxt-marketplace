<template>
	<Head>
		<Title>Nuxt Marketplace | {{ selectedProduct.title }}</Title>
		<Meta name="description" :content="selectedProduct.description" />
	</Head>
	<div class="container page product">
		<Loader v-if="loading" class="product__loader" />
		<ProductDetails v-else :product="selectedProduct" />
	</div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Loader from '~/components/Loader.vue'
import ProductDetails from '~/components/marketplace/ProductDetails.vue'
import { useStore } from '~/stores/'

const route = useRoute()
const store = useStore()
const selectedProduct = computed(() => store.selectedProduct || {})
const loading = ref(true)

const loadProductById = async id => {
	loading.value = true
	await store.fetchProductById(id)
	loading.value = false
}

onMounted(() => {
	loadProductById(route.params.id)
})

watch(
	() => route.params.id,
	newId => {
		loadProductById(newId)
	}
)
</script>

<style lang="scss" scoped>
.product {
	&__loader {
		height: 50vh;
	}
}
</style>
