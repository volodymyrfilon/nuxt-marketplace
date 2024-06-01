<template>
	<nav class="nav">
		<ul class="nav__list">
			<li
				v-for="item in data"
				:key="item.label"
				:class="{ nav__item: true, 'nav__item--cart': item.isCart }"
			>
				<NuxtLink class="nav__link" :to="item.link">{{ item.label }}</NuxtLink>
			</li>
			<CartDialog class="nav__cart-dialog" />
		</ul>
	</nav>
</template>

<script setup>
import CartDialog from '~/components/marketplace/CartDialog.vue'

const { data } = defineProps(['data'])
</script>

<style lang="scss">
.nav {
	&__list {
		list-style: none;
		gap: 0 20px;
		display: flex;
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
	.nav__cart-dialog {
		opacity: 0;
		visibility: hidden;

		&:hover {
			opacity: 1;
			visibility: visible;
		}
	}
	.nav__item--cart:hover + .nav__cart-dialog {
		opacity: 1;
		visibility: visible;
	}

	.router-link-exact-active {
		color: #3b9de8;
	}
}
</style>
