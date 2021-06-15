<template>
	<a :href="entry.fields.href">{{ entry.fields.text }}</a>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { ILinkExternal } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => ILinkExternal,
			required: true,
		},
	},
});
</script>
