<template>
	<Header :data="navigationData" />

	<main class="main">
		<slot />
	</main>

	<Footer class="footer-default" />
</template>

<script setup>
const navigationData = [
	{
		link: '/marketplace',
		label: 'Marketplace',
		isDisabled: false,
		isCart: false,
	},
	{
		link: '/marketplace/cart',
		label: 'Cart',
		isDisabled: false,
		isCart: true,
	},
]
</script>

<style scoped lang="scss">
.footer-default {
	margin-top: 20px;
}
</style>
