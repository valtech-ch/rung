<template>
	<NuxtLink v-if="contentPage" :to="`/${contentPage.fields.slug}`">{{
		entry.fields.text
	}}</NuxtLink>
</template>
<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api';
import useContentful from '~/plugins/contentful';
import { IContentPage, ILink } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => ILink,
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
