<template>
	<div class="homepage">
		<h1 class="homepage__title title">
			Nuxt Marketplace - Your Ultimate Online Shopping Destination!
		</h1>
		<img
			class="homepage__img"
			src="https://ufo-engineering.com/img/ufo.svg"
			alt="Homepage image"
		/>
		<NuxtLink class="homepage__link" to="/marketplace">
			<Button
				class="homepage__button"
				data="Get started"
				ariaLabel="Go to marketplace"
			/>
		</NuxtLink>
		<p class="homepage__subtitle">
			Welcome to Nuxt Marketplace, where you can discover a wide range of
			products from top brands and local sellers. Our user-friendly platform
			ensures a seamless shopping experience, whether you're looking for the
			latest electronics, trendy fashion, home essentials, or unique handmade
			items. Start exploring today and enjoy secure payments, fast shipping, and
			exceptional customer service!
		</p>
	</div>
</template>

<script setup>
import Button from '~/components/ui/Button.vue'

definePageMeta({
	layout: 'landing',
})
</script>

<style lang="scss" scoped>
@keyframes bounce {
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-20px);
	}
}

.homepage {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 40px;

	&__title {
		margin: 0 auto;
	}
	&__img {
		width: 100%;
		height: auto;
		animation: bounce 2s ease infinite;
	}
	&__subtitle {
		width: 90%;
		text-align: center;
		font-size: clamp(18px, calc(2vw + 10px), 24px);
		font-family: 'Open Sans', sans-serif;
		margin: 0 auto;
		margin-bottom: 40px;
	}
	&__link {
		position: relative;
		display: flex;
		justify-content: center;
		left: 50%;
		transform: translateX(-50%);
		width: 200px;
	}
	&__button {
		color: white;
		background-color: #3b9de8;
		text-transform: uppercase;
		font-weight: 600;
	}
	@media (min-width: 768px) {
		&__subtitle {
			width: 70%;
		}
	}
	@media (min-width: 1024px) {
		&__subtitle {
			width: 60%;
		}
	}
	@media (min-width: 1440px) {
		&__subtitle {
			width: 50%;
		}
	}
}
</style>
