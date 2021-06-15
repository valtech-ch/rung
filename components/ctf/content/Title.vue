<template>
	<component
		:is="entry.fields.component || 'div'"
		:class="entry.fields.variant"
		>{{ entry.fields.title }}</component
	>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { ITitle } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => ITitle,
			required: true,
		},
	},
});
</script>
