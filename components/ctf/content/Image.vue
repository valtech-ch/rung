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
import useImage from '~/plugins/image';
import { IImage } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => IImage,
			required: true,
		},
	},
	setup(props) {
		const image = useImage(
			props.entry.fields.image,
			'100vw',
			[300, 600, 900],
			props.entry.fields.alt
		);
		return {
			image,
		};
	},
});
</script>
