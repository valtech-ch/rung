<template>
	<NuxtLink :to="`/${contentPage.fields.slug}`">{{
		entry.fields.title
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
		const contentPage = useAsync(() =>
			client.getEntry<IContentPage>(props.entry.fields.link.sys.id)
		);
		return {
			contentPage,
		};
	},
});
</script>
