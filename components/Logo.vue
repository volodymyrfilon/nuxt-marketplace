<template>
	<div class="logo">
		<NuxtLink to="/" class="logo__link">
			Nuxt-Market
			<img
				class="logo__img"
				src="/assets/icons/alien-ship-blue.svg"
				alt="Logo Icon"
			/>
		</NuxtLink>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
.logo {
	&__link {
		text-transform: uppercase;
		font-weight: 700;
		display: flex;
		align-items: center;
		font-size: 24px;
		font-family: 'Open Sans', sans-serif;
	}

	&__img {
		height: 36px;
	}
}

@media (min-width: 768px) {
	.logo {
		&__link {
			font-size: 28px;
		}
		&__img {
			height: 40px;
		}
	}
}
</style>
