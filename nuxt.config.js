import { sortRoutes } from '@nuxt/utils';
import contentfulConfig from './.contentful.json';

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'rung',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/css/grid.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ['@nuxtjs/composition-api/module', '@nuxt/typescript-build'],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['@nuxtjs/axios', '@nuxt/image'],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	router: {
		extendRoutes(routes, resolve) {
			routes.push({
				path: '/home',
				component: resolve(__dirname, 'pages/index.vue'),
			});
			sortRoutes(routes);
		},
	},

	env: {
		CTF_SPACE_ID: contentfulConfig.CTF_SPACE_ID,
		CTF_CDA_ACCESS_TOKEN: contentfulConfig.CTF_CDA_ACCESS_TOKEN,
	},
};
