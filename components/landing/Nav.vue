<template>
	<nav class="nav">
		<ul class="nav__list">
			<li class="nav__item">
				<NuxtLink class="nav__link" href="/">Home</NuxtLink>
			</li>
			<li class="nav__item">
				<NuxtLink class="nav__link" href="/about">About</NuxtLink>
			</li>
			<li class="nav__item">
				<NuxtLink class="nav__link" href="/marketplace">Marketplace</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav {
	&__list {
		list-style: none;
		display: flex;
		gap: 0 20px;
		font-size: 16px;
	}

	&__link {
		text-decoration: none;
		color: #333333;
		transition: color 300ms ease;

		&:hover {
			color: #3b9de8;
		}
	}
}
.router-link-exact-active {
	color: #3b9de8;
}
</style>
