<template>
	<figure>
		<img
			:src="entry.fields.image.fields.file.url"
			:alt="entry.fields.alt"
		/>
		<figcaption v-if="entry.fields.caption">
			{{ entry.fields.caption }}
		</figcaption>
	</figure>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { IImage } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => IImage,
			required: true,
		},
	},
});
</script>
