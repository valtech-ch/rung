<template>
	<div class="text">
		<strong>{{ entry.fields.title }}</strong>
		<!-- eslint-disable-next-line vue/no-v-html -->
		<div v-html="html"></div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { IText } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => IText,
			required: true,
		},
	},
	setup(props) {
		return {
			html: documentToHtmlString(props.entry.fields.text),
		};
	},
});
</script>
