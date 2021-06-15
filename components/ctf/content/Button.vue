<template>
	<NuxtLink
		v-if="contentPage"
		class="btn"
		:class="entry.fields.variant"
		:to="`/${contentPage.fields.slug}`"
		>{{ entry.fields.title }}</NuxtLink
	>
</template>
<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api';
import useContentful from '~/plugins/contentful';
import { IButton, IContentPage } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => IButton,
			required: true,
		},
	},
	setup(props) {
		const { client } = useContentful();
		const pageId = props.entry.fields.link.sys.id;
		const contentPage = useAsync(
			() => client.getEntry<IContentPage>(pageId),
			pageId
		);
		return {
			contentPage,
		};
	},
});
</script>
