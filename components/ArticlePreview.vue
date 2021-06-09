<template>
	<div class="preview">
		<h3 class="previewTitle">
			{{ article.fields.title }}
		</h3>
		<small>{{ article.fields.publishDate }}</small>
		<p v-html="article.fields.description"></p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { IBlogPost } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		article: {
			type: Object as () => IBlogPost,
			required: true,
		},
	},
});
</script>

<style scoped>
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
