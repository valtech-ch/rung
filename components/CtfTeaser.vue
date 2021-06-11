<template>
	<div class="teaser">
		<small v-if="entry.fields.pretitle">{{ entry.fields.pretitle }}</small>
		<strong>{{ entry.fields.title }}</strong>
		<p>{{ entry.fields.description }}</p>
		<img
			v-if="entry.fields.image"
			:src="entry.fields.image.fields.file.url"
		/>
	</div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { ITeaser } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => ITeaser,
			required: true,
		},
	}
});
</script>
