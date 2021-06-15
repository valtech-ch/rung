<template>
	<div>
		<CtfContentButton v-if="type === 'button'" :entry="entry" />
		<CtfContentGrid v-if="type === 'grid'" :entry="entry" />
		<CtfContentImage v-if="type === 'image'" :entry="entry" />
		<CtfContentLink v-if="type === 'link'" :entry="entry" />
		<CtfContentLinkExternal v-if="type === 'linkExternal'" :entry="entry" />
		<CtfContentTeaser v-if="type === 'teaser'" :entry="entry" />
		<CtfContentText v-if="type === 'text'" :entry="entry" />
		<CtfContentTitle v-if="type === 'title'" :entry="entry" />
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
