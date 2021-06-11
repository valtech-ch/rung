<template>
	<div>
		<CtfButton v-if="type === 'button'" :entry="entry" />
		<div v-if="type === 'grid'">GRID</div>
		<CtfTeaser v-if="type === 'teaser'" :entry="entry" />
		<CtfText v-if="type === 'text'" :entry="entry" />
		<CtfTitle v-if="type === 'title'" :entry="entry" />
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';
import { Entry } from 'contentful';
import {
	IButton,
	IGrid,
	ITeaser,
	IText,
	ITitle,
} from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => Entry<
				IButton | IGrid | ITeaser | IText | ITitle
			>,
			required: true,
		},
	},
	setup(props) {
		const type = computed(() => props.entry.sys.contentType.sys.id);
		return {
			type,
		};
	},
});
</script>
