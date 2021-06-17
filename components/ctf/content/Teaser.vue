<template>
	<NuxtLink
		v-if="contentPage"
		:to="`/${contentPage.fields.slug}`"
		class="teaser"
	>
		<small v-if="entry.fields.pretitle">{{ entry.fields.pretitle }}</small>
		<strong>{{ entry.fields.title }}</strong>
		<p>{{ entry.fields.description }}</p>
		<img
			v-if="entry.fields.image"
			:src="entry.fields.image.fields.file.url"
		/>
	</NuxtLink>
</template>
<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api';
import useContentful from '~/plugins/contentful';
import { IContentPageFields, ITeaser } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => ITeaser,
			required: true,
		},
	},
	setup(props) {
		const { client } = useContentful();
		const pageId = props.entry.fields.contentPage.sys.id;
		const contentPage = useAsync(
			() => client.getEntry<IContentPageFields>(pageId),
			pageId
		);
		return {
			contentPage,
		};
	},
});
</script>
