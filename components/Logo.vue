<template>
	<div class="logo">
		<NuxtLink to="/" class="logo__link">
			<span class="logo__text">Nuxt-Market</span>
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
	position: relative;

	&__link {
		text-transform: uppercase;
		font-weight: 700;
		display: inline-block;
		font-size: 24px;
		font-family: 'Open Sans', sans-serif;
		position: relative;
	}

	&__text {
		position: relative;
	}

	&__img {
		z-index: 1;
		height: 36px;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(-100%, -50%);
		animation: fly-ufo-blue 7.5s linear infinite;
	}

	@keyframes fly-ufo-blue {
		0% {
			transform: translate(-100%, -50%) translateX(0);
			z-index: 1;
		}
		25% {
			transform: translate(-100%, 10%) translateX(200%);
		}
		40% {
			z-index: -1;
		}
		50% {
			transform: translate(-100%, -50%) translateX(570%);
		}
		75% {
			transform: translate(-100%, -110%) translateX(400%);
		}
		99% {
			z-index: 0;
		}
		100% {
			transform: translate(-100%, -50%) translateX(0);
			z-index: 1;
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
}
</style>
