<template>
	<div>
		<div
			class="mobile-nav__overlay"
			v-if="isMenuOpen"
			@click="toggleMenu"
		></div>
		<button class="mobile-nav__toggle" @click="toggleMenu">
			<span class="mobile-nav__toggle-icon"></span>
		</button>
		<nav :class="['mobile-nav', { 'mobile-nav--open': isMenuOpen }]">
			<ul class="mobile-nav__list">
				<li class="mobile-nav__item" @click="toggleMenu">
					<NuxtLink class="mobile-nav__link" href="/">Home</NuxtLink>
				</li>
				<li class="mobile-nav__item" @click="toggleMenu">
					<NuxtLink class="mobile-nav__link" href="/about">About</NuxtLink>
				</li>
				<li class="mobile-nav__item" @click="toggleMenu">
					<NuxtLink class="mobile-nav__link" href="/marketplace"
						>Marketplace</NuxtLink
					>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped lang="scss">
.mobile-nav__toggle {
	background: none;
	border: none;
	cursor: pointer;
	padding: 10px;

	&-icon {
		display: block;
		width: 25px;
		height: 2px;
		background-color: #333;
		position: relative;

		&::before,
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: #333;
			transition: transform 0.3s ease;
		}

		&::before {
			top: -8px;
		}

		&::after {
			top: 8px;
		}
	}

	&.open .mobile-nav__toggle-icon {
		background-color: transparent;

		&::before {
			transform: rotate(45deg) translate(5px, 5px);
		}

		&::after {
			transform: rotate(-45deg) translate(5px, -5px);
		}
	}
}

.mobile-nav {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	right: 0;
	width: 80%;
	height: 100%;
	background-color: white;
	transform: translateX(100%);
	transition: transform 0.3s ease;
	z-index: 10;

	&--open {
		transform: translateX(0);
	}

	&__overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 5;
	}

	&__list {
		list-style: none;
		padding: 0;
		margin: 0;
		text-align: center;
	}

	&__item {
		margin-bottom: 20px;
	}

	&__link {
		text-decoration: none;
		color: #333;
		font-size: 18px;
		transition: color 300ms ease;

		&:hover {
			color: #3b9de8;
		}
	}
}
</style>
