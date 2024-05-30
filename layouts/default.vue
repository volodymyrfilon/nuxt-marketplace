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
	},
	{
		link: '/marketplace/cart',
		label: 'Cart',
		isDisabled: false,
	},
	{
		link: '/marketplace/support',
		label: 'Support',
		isDisabled: true,
	},
]
</script>

<style scoped lang="scss">
.footer-default {
	margin-top: 20px;
}
</style>
