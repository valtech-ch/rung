<template>
	<div class="wrapper">
		<h1>{{ title }}</h1>
		<div class="content">
			<div v-for="section in sections" :key="section.sys.id">
				{{ section.sys.contentType.sys.id }}
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, useAsync } from '@nuxtjs/composition-api';
import useContentful from '~/plugins/contentful';
import { IContentPage } from '~/types/generated/contentful';

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
		const pageResults = useAsync(() =>
			client.getEntries<IContentPage>({
				content_type: CTF_TYPE_ID,
				'fields.slug': props.slug,
			})
		);
		const page = computed(() => {
			if (pageResults.value && pageResults.value.total > 0) {
				return pageResults.value.items[0];
			}
		});
		const title = computed(() => {
			if (page.value) {
				return page.value.fields.title;
			}
		});
		const sections = computed(() => {
			if (page.value) {
				return page.value.fields.sections;
			}
		});
		return {
			title,
			sections,
		};
	},
});
</script>
