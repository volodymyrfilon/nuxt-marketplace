<template>
	<footer class="footer">
		<div class="footer__content container">
			<div class="footer__section footer__section--about">
				<h3 class="footer__section-title">About Nuxt Marketplace</h3>
				<p class="footer__text">
					Nuxt Marketplace is your ultimate online shopping destination.
					Discover a wide range of products from top brands and local sellers,
					all in one place.
				</p>
			</div>
			<div class="footer__section footer__section--links">
				<h3 class="footer__section-title">Quick Links</h3>
				<ul class="footer__list">
					<li class="footer__list-item">
						<NuxtLink to="/about" class="footer__link">About Us</NuxtLink>
					</li>
					<li class="footer__list-item">
						<NuxtLink to="/marketplace" class="footer__link"
							>Marketplace</NuxtLink
						>
					</li>
				</ul>
			</div>
			<div class="footer__section footer__section--contact">
				<h3 class="footer__section-title">Contact Us</h3>
				<p class="footer__text">
					Email:
					<NuxtLink to="mailto:support@nuxtmarketplace.com" class="footer__link"
						>support@nuxtmarketplace.com</NuxtLink
					>
				</p>
				<p class="footer__text">
					Phone:
					<NuxtLink to="tel:+1234567890" class="footer__link"
						>(+123) 456-7890</NuxtLink
					>
				</p>
			</div>
		</div>
		<div class="footer__bottom">
			<p class="footer__bottom-text">
				&copy; 2024 Nuxt Marketplace. All rights reserved.
			</p>
		</div>
	</footer>
</template>

<style scoped lang="scss">
.footer {
	background-color: #333333;
	color: #ddefff;
	padding: 12px 20px;
	font-family: 'Open Sans', sans-serif;
	&__content {
		display: flex;
		flex-direction: column;

		& > * {
			margin-bottom: 12px;
		}
	}
	&__section {
		&-title {
			font-size: 20px;
			margin-bottom: 20px;
			color: #3b9de8;
		}
	}
	&__text {
		font-size: 14px;
		line-height: 1.6;
	}
	&__list {
		list-style-type: none;
		padding: 0;
	}
	&__list-item {
		margin-bottom: 10px;
	}
	&__link {
		color: #ddefff;
	}
	&__bottom {
		text-align: center;
		border-top: 1px solid #ddefff;
		padding-top: 12px;
	}
	&__bottom-text {
		font-size: 14px;
	}
}
@media (min-width: 576px) {
	.footer__content {
		flex-direction: row;
		justify-content: space-between;
		gap: 20px;
	}
}
@media (min-width: 768px) {
	.footer__content > * {
		flex: 1;
	}
}
</style>
