<template>
	<div class="container">
		<Logo />
		<h1 class="title">Rung</h1>
		<div v-if="person && posts">
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
				order: '-sys.createdAt',
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

img {
	display: block;
	width: 100%;
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
