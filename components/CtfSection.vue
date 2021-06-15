<template>
	<div>
		<CtfButton v-if="type === 'button'" :entry="entry" />
		<CtfGrid v-if="type === 'grid'" :entry="entry" />
		<CtfImage v-if="type === 'image'" :entry="entry" />
		<CtfLink v-if="type === 'link'" :entry="entry" />
		<CtfLinkExternal v-if="type === 'linkExternal'" :entry="entry" />
		<CtfTeaser v-if="type === 'teaser'" :entry="entry" />
		<CtfText v-if="type === 'text'" :entry="entry" />
		<CtfTitle v-if="type === 'title'" :entry="entry" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
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
		return {
			type: props.entry.sys.contentType.sys.id,
		};
	},
});
</script>
