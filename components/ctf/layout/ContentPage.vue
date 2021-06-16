<template>
	<div class="wrapper">
		<h1>{{ title }}</h1>
		<div v-if="sections" class="content">
			<template v-for="section in sections">
				<CtfContentButton
					v-if="section.sys.contentType.sys.id === 'button'"
					:key="section.sys.id"
					:entry="section"
				/>
				<CtfContentGrid
					v-if="section.sys.contentType.sys.id === 'grid'"
					:key="section.sys.id"
					:entry="section"
				/>
				<CtfContentImage
					v-if="section.sys.contentType.sys.id === 'image'"
					:key="section.sys.id"
					:entry="section"
				/>
				<CtfContentLink
					v-if="section.sys.contentType.sys.id === 'link'"
					:key="section.sys.id"
					:entry="section"
				/>
				<CtfContentLinkExternal
					v-if="section.sys.contentType.sys.id === 'linkExternal'"
					:key="section.sys.id"
					:entry="section"
				/>
				<CtfContentTeaser
					v-if="section.sys.contentType.sys.id === 'teaser'"
					:key="section.sys.id"
					:entry="section"
				/>
				<CtfContentText
					v-if="section.sys.contentType.sys.id === 'text'"
					:key="section.sys.id"
					:entry="section"
				/>
				<CtfContentTitle
					v-if="section.sys.contentType.sys.id === 'title'"
					:key="section.sys.id"
					:entry="section"
				/>
			</template>
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
