<template>
	<Header :data="navigationData" />

	<main class="container main main-landing">
		<slot />
	</main>

	<Footer />
</template>

<script setup>
const navigationData = [
	{
		link: '/',
		label: 'Home',
		isDisabled: false,
	},
	{
		link: '/about',
		label: 'About',
		isDisabled: false,
	},
	{
		link: '/marketplace',
		label: 'Marketplace',
		isDisabled: false,
	},
]
</script>

<style scoped lang="scss"></style>
