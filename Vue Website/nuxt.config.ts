// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: [
		"font-awesome/css/font-awesome.min.css",
		"bootstrap/dist/css/bootstrap.min.css",
		"@/assets/css/style.css",
		"@/assets/css/base.css",
		"@/assets/css/index.css",
		"@/assets/css/faq.css",
		"@/assets/css/contact.css",
		"@/assets/css/about.css",
		"@/assets/css/form.css",
	],
	app: {
		head: {
			title: "ReStore",
			htmlAttrs: {
				lang: "en",
			},
			meta: [
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					hid: "description",
					name: "description",
					content: "",
				},
			],
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
				{ rel: "stylesheet", href: "/css/bootstrap.css" },
			],
		},
	},
	modules: ["@nuxtjs/google-fonts"],
	googleFonts: {
		download: true,
		base64: true,
		families: {
			"Josefin+Sans": [100, 200, 300, 400, 500, 600, 700],
		},
	},
});
