<template>
	<header class="header header-landing container">
		<Logo class="header__logo" />
		<Navigation :data="data" class="header__nav" />
		<MobileNavigation :data="data" class="header__mobile-nav" />
	</header>
</template>

<script setup>
const { data } = defineProps(['data'])
</script>

<style scoped lang="scss">
.header {
	border-bottom: 1px solid #ddefff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;

	&__mobile-nav {
		display: flex;
	}

	&__nav {
		display: none;
	}
}

@media (min-width: 768px) {
	.header {
		&__mobile-nav {
			display: none;
		}

		&__nav {
			display: flex;
		}
	}
}
</style>
