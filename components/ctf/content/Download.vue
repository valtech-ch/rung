<template>
	<a :href="file.url">{{ file.fileName }}</a>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { IDownload } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => IDownload,
			required: true,
		},
	},
	setup(props) {
		const file = props.entry.fields.file.fields.file;
		return {
			file,
		};
	},
});
</script>
