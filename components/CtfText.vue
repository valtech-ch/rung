<template>
	<div class="text">
		<strong>{{ entry.fields.title }}</strong>
		<!-- eslint-disable-next-line vue/no-v-html -->
		<div v-html="html"></div>
	</div>
</template>
<script lang="ts">
import { computed, defineComponent, useAsync } from '@nuxtjs/composition-api';
import { Block, Document, INLINES, Inline } from '@contentful/rich-text-types';
import {
	documentToHtmlString,
	Options,
} from '@contentful/rich-text-html-renderer';
import { getRichTextEntityLinks } from '@contentful/rich-text-links';
import { ContentfulClientApi, Entry } from 'contentful';
import { IContentPage, IText } from '~/types/generated/contentful';
import useContentful from '~/plugins/contentful';

async function getLinkedPages(
	document: Document,
	client: ContentfulClientApi
): Promise<Map<string, Entry<IContentPage>>> {
	const linkMap = new Map<string, Entry<IContentPage>>();
	const links = getRichTextEntityLinks(document, 'Entry');
	for (const entry of links.Entry) {
		const contentPage = await client.getEntry<IContentPage>(entry.id);
		linkMap.set(entry.id, contentPage);
	}
	return linkMap;
}

export default defineComponent({
	props: {
		entry: {
			type: Object as () => IText,
			required: true,
		},
	},
	setup(props) {
		const { client } = useContentful();

		const document = props.entry.fields.text;
		const linkMap = useAsync(() => getLinkedPages(document, client));

		const parseOptions = computed(() => {
			const options: Partial<Options> = {};
			if (linkMap.value && linkMap.value.size > 0) {
				const map = linkMap.value;
				options.renderNode = {
					[INLINES.ENTRY_HYPERLINK]: (node: Inline | Block) => {
						const targetId = node.data.target.sys.id;
						const contentPage = map.get(targetId);
						return `<a href="/${contentPage!.fields.slug}">${
							contentPage!.fields.title
						}</a>`;
					},
				};
			}
			return options;
		});

		const html = computed(() =>
			documentToHtmlString(document, parseOptions.value)
		);
		return {
			html,
		};
	},
});
</script>
