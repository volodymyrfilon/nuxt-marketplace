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
	app: {
		head: {
			title: 'Nuxt Marketplace',
			meta: [
				{
					name: 'description',
					content:
						'Discover the best marketplace Volodymyr Filon ever made | Nuxt Marketplace',
				},
			],
			link: [],
		},
	},
	runtimeConfig: {
		//variable: process.env.VARIABLE
	},
})
