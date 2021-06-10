<template>
	<div class="preview">
		<div class="previewImage">
			<img :src="article.fields.heroImage.fields.file.url" />
		</div>
		<h3 class="previewTitle">
			<NuxtLink :to="`/${article.fields.slug}`">{{
				article.fields.title
			}}</NuxtLink>
		</h3>
		<small>{{ publishDate }}</small>
		<p v-html="article.fields.description"></p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { IBlogPost } from '~/types/generated/contentful';
import { formatDate } from '~/utils/blog';

export default defineComponent({
	props: {
		article: {
			type: Object as () => IBlogPost,
			required: true,
		},
	},
	setup(props) {
		const publishDate = formatDate(props.article.fields.publishDate);
		return {
			publishDate,
		};
	},
});
</script>

<style scoped>
.previewImage {
	overflow: hidden;
	max-height: 170px;
}
.previewImage img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center center;
}

.previewTitle {
	font-size: 1.5em;
}

.tag {
	color: #a0a0a0;
	text-decoration: none;
	display: inline-block;
	padding: 0.33333rem 0.5rem;
	line-height: 1;
	border-radius: 2px;
	border: 1px solid #a0a0a0;
	margin-right: 0.5em;
}
</style>
