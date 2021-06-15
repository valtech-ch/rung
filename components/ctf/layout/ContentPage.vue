<template>
	<div class="wrapper">
		<h1>{{ title }}</h1>
		<div class="content">
			<CtfContentSection
				v-for="section in sections"
				:key="section.sys.id"
				:entry="section"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, useAsync } from '@nuxtjs/composition-api';
import useContentful from '~/plugins/contentful';
import { IContentPageFields } from '~/types/generated/contentful';

const CTF_TYPE_ID = 'contentPage';

export default defineComponent({
	props: {
		slug: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const { client } = useContentful();
		const pageResults = useAsync(
			() =>
				client.getEntries<IContentPageFields>({
					content_type: CTF_TYPE_ID,
					'fields.slug': props.slug,
				}),
			props.slug
		);
		const page = computed(() => {
			return pageResults.value?.items[0];
		});
		const title = computed(() => {
			return page.value?.fields.title;
		});
		const sections = computed(() => {
			return page.value?.fields.sections;
		});
		return {
			title,
			sections,
		};
	},
});
</script>
