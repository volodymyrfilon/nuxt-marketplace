export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['@/assets/scss/global.scss'],
	modules: [
		[
			'@pinia/nuxt',
			{
				autoImports: ['defineStore', 'acceptHMRUpdate'],
			},
		],
	],
	imports: {
		dirs: ['stores'],
	},
	// plugins: ['@/plugins/pinia-persist.ts'],
})
