<template>
	<div class="container">
		<Hero :author="person" />
		<div class="wrapper">
			<h2 class="section-headline">Recent articles</h2>
			<ul class="article-list">
				<li v-for="post in posts.items" :key="post.sys.id">
					<ArticlePreview :article="post" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api';
import { IBlogPost, IPerson } from '~/types/generated/contentful';
import useContentful from '~/plugins/contentful';

const CTF_PERSON_ID = '15jwOBqpxqSAOy2eOO4S0m';
const CTF_BLOG_POST_TYPE_ID = 'blogPost';

export default defineComponent({
	setup() {
		const { env } = useContext();
		const { client } = useContentful(env);

		const person = useAsync(() => client.getEntry<IPerson>(CTF_PERSON_ID));
		const posts = useAsync(() => {
			return client.getEntries<IBlogPost>({
				content_type: CTF_BLOG_POST_TYPE_ID,
				order: '-fields.publishDate',
			});
		});
		return {
			person,
			posts,
		};
	},
});
</script>

<style>
.container {
	max-width: 1180px;
	margin: 50px auto 0px auto;
	background: #fff;
}

.wrapper {
	width: calc(100% - 10vmin);
	margin: 0 auto;
	padding: 5vmin 0;
}

/**
 * article grid
 */
.article-list {
	margin: 0;
	padding: 0;
	list-style: none;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 5vmin;
}

/**
 *
 */
.section-headline {
	padding: 0 0 0.4em 0;
	margin: 0 0 5vmin 0;
	border-bottom: 1px solid #ddd;
}

/**
 *
 */
.list-inline {
	margin: 0;
	padding: 0;
	list-style: none;
}

.list-inline li {
	display: inline-block;
}
</style>
