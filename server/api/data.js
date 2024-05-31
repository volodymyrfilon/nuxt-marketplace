export default defineEventHandler(async event => {
	//! query params
	// const { name } = useQuery(event)

	//! post data
	// const { age } = await useBody(event)

	//! api call with private key
	// const { data } = await $fetch('........')
	// return data

	return {
		landingPageDescription:
			"Welcome to Nuxt Marketplace, where you can discover a wide range of products from top brands and local sellers. Our user-friendly platform ensures a seamless shopping experience, whether you're looking for the latest electronics, trendy fashion, home essentials, or unique handmade items. Start exploring today and enjoy secure payments, fast shipping, and exceptional customer service.!",
		// message: `Hello, ${name}! You are ${age} years old!`,
	}
})
