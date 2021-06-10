<template>
	<div class="hero">
		<div v-if="image" class="heroImage">
			<img :src="image" />
		</div>
		<div v-if="hasDetails" class="heroDetails">
			<h3 v-if="headline" class="heroHeadline">{{ headline }}</h3>
			<p v-if="title" class="heroTitle">{{ title }}</p>
			<p v-if="lead">{{ lead }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
	props: {
		image: {
			type: String,
		},
		headline: {
			type: String,
		},
		title: {
			type: String,
		},
		lead: {
			type: String,
		},
	},
	setup(props) {
		const hasDetails = props.headline || props.title;
		return {
			hasDetails,
		};
	}
});
</script>

<style scoped>
.hero {
	position: relative;
	background: #000;
	color: #fff;
	text-align: center;
}

.heroImage {
	/*
    Ensure golden ratio for the hero size while limiting it to some extend to
    the viewport width
  */
	height: 61.8vh;
	max-height: 400px;
	position: relative;
	overflow: hidden;
}
.heroImage img {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center center;
}

.heroDetails {
	position: absolute;
	background: rgba(0, 0, 0, 0.7);
	left: 50%;
	bottom: 0;
	transform: translate(-50%, 0);
	font-size: 14px;
	padding: 0 0.5em;
}

@media (min-width: 600px) {
	.heroDetails {
		font-size: 16px;
	}
}

@media (min-width: 1000px) {
	.heroDetails {
		font-size: 20px;
	}
}

.heroHeadline {
	margin: 0;
}

.heroTitle {
	margin: 0;
	font-size: 1.125em;
	font-weight: bold;
}
</style>
