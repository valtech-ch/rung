<template>
	<div class="grid">
		<strong>{{ entry.fields.title }}</strong>
		<CtfContentGridItem
			v-for="item in entry.fields.items"
			:key="item.sys.id"
			:entry="item"
		/>
	</div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { IGrid } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => IGrid,
			required: true,
		},
	},
});
</script>
