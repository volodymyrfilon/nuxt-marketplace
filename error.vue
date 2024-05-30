<template>
	<div class="container error">
		<p class="error__status-code">{{ error.statusCode }}</p>
		<img class="error__ufo" src="/assets/icons/alien-ship-red.svg" alt="UFO" />
		<p class="error__message">Oooops...</p>
		<p class="error__details">{{ error.message }}</p>
		<div class="error__button-group">
			<NuxtLink
				to="/"
				class="error__button"
				aria-label="Go to homepage"
				@click="handleClearError"
			>
				Home
			</NuxtLink>
			<NuxtLink
				to="/marketplace"
				aria-label="Go to marketplace"
				class="error__button"
				@click="handleClearError"
			>
				Marketplace
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError()
</script>

<style scoped lang="scss">
.error {
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: 50px;
	position: relative;

	&__status-code {
		font-size: 70px;
		font-weight: bold;
		position: relative;
	}

	&__message {
		font-size: 40px;
		font-weight: bold;
	}

	&__details {
		font-size: 30px;
		font-weight: bold;
	}

	&__button-group {
		display: flex;
		gap: 20px;
	}

	&__button {
		padding: 12px 16px;
		background-color: #333333;
		outline: none;
		border: none;
		color: white;
		border-radius: 12px;
	}

	&__ufo {
		height: 100px;
		position: absolute;
		top: -50px;
		left: 50%;
		transform: translateX(-50%);
		animation: fly-and-shine 7.5s linear infinite;
	}

	@keyframes fly-and-shine {
		0% {
			transform: translateX(-50%) translateY(0) rotate(0deg);
			opacity: 1;
		}
		25% {
			transform: translateX(-100%) translateY(50px) rotate(15deg);
			opacity: 0.8;
		}
		50% {
			transform: translateX(50%) translateY(100px) rotate(-15deg);
			opacity: 0.6;
		}
		75% {
			transform: translateX(0) translateY(150px) rotate(15deg);
			opacity: 0.8;
		}
		100% {
			transform: translateX(-50%) translateY(0) rotate(0deg);
			opacity: 1;
		}
	}
}
</style>
