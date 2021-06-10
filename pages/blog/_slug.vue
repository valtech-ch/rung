<template>
	<div v-if="post" class="container">
		<Hero :image="post.fields.heroImage.fields.file.url" />
		<div class="wrapper">
			<h1 class="section-headline">{{ post.fields.title }}</h1>
			<p>{{ publishDate }}</p>
			<Markdown :source="post.fields.body" />
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, useAsync, useContext, useRoute } from '@nuxtjs/composition-api';

import { IBlogPost } from '~/types/generated/contentful';
import { CTF_BLOG_POST_TYPE_ID, formatDate } from '~/utils/blog';
import useContentful from '~/plugins/contentful';


export default defineComponent({
	setup() {
		const { env } = useContext();
		const { client } = useContentful(env);
		const route = useRoute();
		const slug = computed(() => route.value.params.slug);

		const posts = useAsync(() =>
			client.getEntries<IBlogPost>({
				content_type: CTF_BLOG_POST_TYPE_ID,
				slug,
			})
		);
		const post = computed(() => {
			if (posts.value && posts.value.total > 0) {
				return posts.value.items[0];
			}
		});
		const publishDate = computed(() => {
			if (post.value) {
				return formatDate(post.value.fields.publishDate);
			}
		});
		return {
			post,
			publishDate,
		};
	},
});
</script>
