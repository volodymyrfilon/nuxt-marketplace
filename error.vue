<template>
	<div class="container error">
		<p class="error__status-code">{{ error.statusCode }}</p>
		<p class="error__message">Oooops...</p>
		<p class="error__details">{{ error.message }}</p>
		<div class="error__button-group">
			<NuxtLink to="/" class="error__button" @click="handleClearError"
				>Home</NuxtLink
			>
			<NuxtLink
				to="/marketplace"
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
	&__status-code {
		font-size: 70px;
		font-weight: bold;
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
}
</style>
