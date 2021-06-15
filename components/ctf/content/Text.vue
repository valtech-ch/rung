<template>
	<!-- eslint-disable-next-line vue/no-v-html -->
	<div class="text" v-html="html"></div>
</template>
<script lang="ts">
import { computed, defineComponent, useAsync } from '@nuxtjs/composition-api';
import { Block, INLINES, Inline, Text } from '@contentful/rich-text-types';
import {
	documentToHtmlString,
	Options,
} from '@contentful/rich-text-html-renderer';
import { IText } from '~/types/generated/contentful';
import useContentful from '~/plugins/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => IText,
			required: true,
		},
	},
	setup(props) {
		const { client } = useContentful();
		const text = useAsync(
			() => client.getEntry<IText>(props.entry.sys.id),
			props.entry.sys.id
		);

		const html = computed(() => {
			const options: Partial<Options> = {
				renderNode: {
					[INLINES.ENTRY_HYPERLINK]: (node: Inline | Block) => {
						return `<a href="/${node.data.target.fields.slug}">${
							(node.content[0] as Text).value
						}</a>`;
					},
				},
			};
			return documentToHtmlString(text.value?.fields.text, options);
		});
		return {
			html,
		};
	},
});
</script>
