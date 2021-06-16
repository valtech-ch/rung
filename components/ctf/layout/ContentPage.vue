<template>
	<div class="wrapper">
		<h1>{{ title }}</h1>
		<div v-if="sections" class="content">
			<template v-for="section in sections">
				<component
					:is="section.component"
					:key="section.id"
					v-bind="section.props"
				/>
			</template>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, useAsync } from '@nuxtjs/composition-api';
import useContentful, { getComponentByType } from '~/plugins/contentful';
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
		const sections = computed(() =>
			page.value?.fields.sections.map(getComponentByType)
		);
		return {
			title,
			sections,
		};
	},
});
</script>
