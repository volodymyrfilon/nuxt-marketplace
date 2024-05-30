<template>
	<div class="loader">
		<p class="loader__text">Loading...</p>
		<img
			class="loader__ufo"
			src="/assets/icons/alien-ship-green.svg"
			alt="Loading UFO"
		/>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
.loader {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: relative;

	&__text {
		font-size: 30px;
		font-weight: bold;
	}

	&__ufo {
		width: 100px;
		position: absolute;
		animation: fly-randomly 5s infinite;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
	}

	@keyframes fly-randomly {
		0% {
			transform: translate(90px, -50px);
		}
		25% {
			transform: translate(-50px, 100px);
		}
		50% {
			transform: translate(-80px, 50px);
		}
		75% {
			transform: translate(20px, -40px);
		}
		100% {
			transform: translate(90px, -50px);
		}
	}
}
</style>
