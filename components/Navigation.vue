<template>
	<nav class="nav">
		<ul class="nav__list" v-for="item in data" :key="item.label">
			<li class="nav__item">
				<NuxtLink class="nav__link" :to="item.link">{{ item.label }}</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script setup>
const { data } = defineProps(['data'])
</script>

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

		&-disabled {
			color: gray;
			opacity: 0.75;

			&:hover {
				cursor: not-allowed;
				color: gray !important;
			}
		}

		&:hover {
			color: #3b9de8;
		}
	}

	.router-link-exact-active {
		color: #3b9de8;
	}
}
</style>
