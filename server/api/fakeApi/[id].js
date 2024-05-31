export default defineEventHandler(async event => {
	const { id } = event.context.params

	// const { envVariable } = useRuntimeConfig()
	// const fakeUri = `https://fakestoreapi.com/products/${code}&apiKey=${envVariable}`

	const uri = `https://fakestoreapi.com/products/${id}`
	const { data } = await $fetch(uri)

	return data
})
