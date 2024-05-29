<template>
	<header class="header container">
		<Logo class="header__logo" />
		<Nav class="header__nav" />
		<MobileNav class="header__mobile-nav" />
	</header>
</template>

<script setup>
import MobileNav from '../landing/MobileNav.vue'
import Nav from '../landing/Nav.vue'
</script>

<style scoped lang="scss">
.header {
	border-bottom: 1px solid #ddefff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
}

.header__mobile-nav {
	display: none;
}

@media (max-width: 768px) {
	.header__nav {
		display: none;
	}
	.header__mobile-nav {
		display: flex;
	}
}
</style>
