<template>
	<figure>
		<img v-bind="image" />
		<figcaption v-if="entry.fields.caption">
			{{ entry.fields.caption }}
		</figcaption>
	</figure>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import useImage, { GridSizes } from '~/plugins/image';
import { IImage } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => IImage,
			required: true,
		},
		gridSizes: {
			type: Object as () => GridSizes,
			default: undefined,
		},
	},
	setup(props) {
		const { getAttributes } = useImage(
			props.entry.fields.image,
			props.entry.fields.alt
		);
		const image = getAttributes(props.gridSizes);
		return {
			image,
		};
	},
});
</script>
