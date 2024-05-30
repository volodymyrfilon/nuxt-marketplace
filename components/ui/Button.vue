<template>
	<button class="button" :aria-label="ariaLAbel">{{ data }}</button>
</template>

<script setup>
const { data, ariaLAbel } = defineProps(['data', 'ariaLAbel'])
</script>

<style lang="scss" scoped>
.button {
	width: 100%;
	padding: 12px;
	background-color: #ddefff;
	outline: none;
	border: none;
	border-radius: 12px;
	font-size: 14px;
	font-weight: 600;
	font-family: 'Open Sans';
	transition: all 0.3s ease;

	&:hover {
		opacity: 0.8;
	}

	&:active {
		transform: scale(90%);
	}
}
</style>
