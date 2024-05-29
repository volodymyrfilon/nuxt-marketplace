<template>
	<div>
		<Header />
		<main class="container main">
			<slot />
		</main>
		<Footer />
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
.main {
	margin-top: 20px;
}
</style>
