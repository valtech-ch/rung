<template>
	<div v-html="content"></div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import MarkdownIt, { Options as MarkdownItOptions } from 'markdown-it';

export default defineComponent({
	props: {
		source: {
			type: String,
			required: true,
		},
		options: {
			type: Object as () => MarkdownItOptions,
			default: () => {},
		},
	},
	setup(props) {
		const md = new MarkdownIt(props.options);
		const content = md.render(props.source);
		return {
			content,
		};
	},
});
</script>
