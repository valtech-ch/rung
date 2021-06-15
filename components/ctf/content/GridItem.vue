<template>
	<div class="gridItem">
		<CtfContentButton v-if="type === 'button'" :entry="component" />
		<CtfContentImage v-if="type === 'image'" :entry="component" />
		<CtfContentTeaser v-if="type === 'teaser'" :entry="component" />
		<CtfContentTitle v-if="type === 'title'" :entry="component" />
	</div>
</template>
<script lang="ts">
import { computed, defineComponent, useAsync } from '@nuxtjs/composition-api';
import useContentful from '~/plugins/contentful';
import { IGridItem } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => IGridItem,
			required: true,
		},
	},
	setup(props) {
		const { client } = useContentful();
		const gridItem = useAsync(() =>
			client.getEntry<IGridItem>(props.entry.sys.id)
		);
		const component = computed(() => {
			if (gridItem.value) {
				return gridItem.value.fields.component;
			}
		});
		const type = computed(() => {
			if (component.value) {
				return component.value.sys.contentType.sys.id;
			}
		});
		return {
			component,
			type,
		};
	},
});
</script>
