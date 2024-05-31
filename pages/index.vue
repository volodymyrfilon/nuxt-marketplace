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
				data="Get started"
				ariaLabel="Go to markerplace"
				class="homepage__button"
			/>
		</NuxtLink>
		<p class="homepage__subtitle">
			Welcome to Nuxt Marketplace, where you can discover a wide range of
			products from top brands and local sellers. Our user-friendly platform
			ensures a seamless shopping experience, whether you're looking for the
			latest electronics, trendy fashion, home essentials, or unique handmade
			items. Start exploring today and enjoy secure payments, fast shipping, and
			exceptional customer service.
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
		width: 90%;
		margin: 0 auto;
		text-align: center;
	}
	&__img {
		width: 100%;
		height: auto;
		animation: bounce 2s ease infinite;
	}
	&__subtitle {
		width: 90%;
		text-align: center;
		font-size: 16px;
		font-family: 'Open Sans', sans-serif;
		margin: 0 auto;
	}
	&__link {
		position: relative;
		width: 180px;
		left: 50%;
		transform: translateX(-50%);
	}
	&__button {
		background-color: #3b9de8 !important;
		color: white;
		text-transform: uppercase;
		font-weight: 600;
	}

	@media (min-width: 480px) {
		&__subtitle {
			font-size: 18px;
		}
		&__link-item {
			font-size: 18px;
		}
	}
	@media (min-width: 768px) {
		&__title {
			width: 85%;
		}
		&__subtitle {
			font-size: 20px;
			width: 70%;
		}
		&__link-item {
			font-size: 20px;
		}
	}
	@media (min-width: 1024px) {
		&__title {
			width: 75%;
		}
		&__subtitle {
			width: 60%;
			font-size: 22px;
		}
	}
	@media (min-width: 1440px) {
		&__title {
			width: 70%;
		}
		&__subtitle {
			width: 50%;
			font-size: 24px;
		}
	}
}
</style>
