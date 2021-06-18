<template>
	<div>
		<CtfLayoutNavigation :id="topNavId" />
		<Nuxt />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const TOP_NAV_ID = '6BnhSKYsBapBF7Jv4noQmj';

export default defineComponent({
	setup() {
		return {
			topNavId: TOP_NAV_ID,
		}
	},
});
</script>

<style>
@font-face {
	font-family: 'Avenir';
	font-weight: 400;
	font-style: normal;
	src: url('/avenir-400.woff2') format('woff2');
	font-display: swap;
}

body {
	font-family: 'Avenir', Tahoma, Arial, Helvetica, sans-serif;
	font-size: 1em;
	line-height: 1.65;
	color: #373f49;
	background: #eee;
	margin: 0;
}

h1,
h2,
h3 {
	font-size: 2em;
	font-weight: normal;
}

a {
	color: currentColor;
}

/* Navigation */
.top-nav {
	display: flex;
	justify-content: center;
	list-style: none;
	padding: 0;
	margin: 0;
	height: 20vh;
	max-height: 100px;
	font-size: 1.25em;
}
.top-nav li {
	display: inline-flex;
	align-items: center;
	margin: 0 1em;
}

/* Content */
.container {
	max-width: 1180px;
	margin: 0px auto;
	background: #fff;
}

.wrapper {
	width: calc(100% - 10vmin);
	margin: 0 auto;
	padding: 5vmin 0;
}
</style>
