<template>
	<div class="about">
		<h1 class="about__title title">About Us</h1>
		<section class="about__section about__section--mission">
			<h2 class="about__section-title">Our Mission</h2>
			<p class="about__text">
				Our mission is to provide a seamless, secure, and enjoyable shopping
				experience for our customers while supporting local and global sellers.
				We aim to bridge the gap between buyers and sellers, fostering a
				community built on trust, quality, and exceptional service.
			</p>
		</section>
		<section class="about__section about__section--why-choose-us">
			<h2 class="about__section-title">Why Choose Us?</h2>
			<ul class="about__list">
				<li class="about__list-item">
					<strong class="about__list-item-title">Diverse Product Range:</strong>
					From the latest tech gadgets and fashionable apparel to home decor and
					handcrafted goods, we have something for everyone.
				</li>
				<li class="about__list-item">
					<strong class="about__list-item-title"
						>User-Friendly Platform:</strong
					>
					Our intuitive interface makes browsing, purchasing, and managing your
					orders a breeze.
				</li>
				<li class="about__list-item">
					<strong class="about__list-item-title">Secure Transactions:</strong>
					Shop with confidence knowing that your payment information is
					protected with top-notch security measures.
				</li>
				<li class="about__list-item">
					<strong class="about__list-item-title"
						>Fast and Reliable Shipping:</strong
					>
					We partner with trusted carriers to ensure your purchases reach you
					quickly and safely.
				</li>
				<li class="about__list-item">
					<strong class="about__list-item-title"
						>Outstanding Customer Support:</strong
					>
					Our dedicated support team is here to assist you with any questions or
					concerns, ensuring a hassle-free shopping experience.
				</li>
			</ul>
		</section>
		<section class="about__section about__section--join-community">
			<h2 class="about__section-title">Join Our Community</h2>
			<p class="about__text">
				At Nuxt Marketplace, we believe in the power of community. Whether
				you're a buyer looking for unique products or a seller aiming to reach a
				broader audience, we provide the tools and support you need to succeed.
				Join us today and become a part of our growing marketplace family.
			</p>
		</section>
		<section class="about__section about__section--contact-us">
			<h2 class="about__section-title">Contact Us</h2>
			<p class="about__text">
				Have questions or need assistance? Feel free to reach out to our
				customer support team at
				<NuxtLink class="about__link" to="mailto:support@nuxtmarketplace.com"
					>support@nuxtmarketplace.com
				</NuxtLink>
				or call us at
				<NuxtLink class="about__link" to="tel:+1234567890"
					>(+123) 456-7890
				</NuxtLink>
				. We're here to help!
			</p>
		</section>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'landing',
})
</script>

<style scoped lang="scss">
.about {
	display: flex;
	flex-direction: column;
	gap: 10px 0;
	font-family: 'Open Sans', sans-serif;

	&__section-title {
		font-family: 'Montserrat', sans-serif;
		font-size: 20px;
		margin-bottom: 10px;
	}

	&__text {
		font-size: 16px;
	}

	&__list {
		margin-left: 16px;
		padding: 0;
	}

	&__list-item {
		margin-bottom: 10px;
	}

	&__list-item-title {
		display: block;
		font-weight: bold;
	}

	&__link {
		color: #3b9de8;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	@media (min-width: 480px) {
		.about__section-title {
			font-size: 22px;
		}
		.about__text {
			font-size: 18px;
		}
	}

	@media (min-width: 768px) {
		.about__section-title {
			font-size: 24px;
		}
		.about__text {
			font-size: 20px;
		}
	}

	@media (min-width: 1024px) {
		.about__section-title {
			font-size: 26px;
		}
		.about__text {
			font-size: 22px;
		}
	}

	@media (min-width: 1440px) {
		.about__section-title {
			font-size: 28px;
		}
		.about__text {
			font-size: 24px;
		}
	}
}
</style>
