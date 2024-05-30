<template>
	<ProductDetails :product="product" />
	>
</template>

<script setup>
import ProductDetails from '~/components/marketplace/ProductDetails.vue'

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(uri, { key: id })

if (!product.value) {
	throw createError({ status: 404, statusMessage: 'Product not found' })
}
</script>

<style scoped></style>
