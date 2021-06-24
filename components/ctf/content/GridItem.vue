<template>
	<div v-if="item" class="gridItem" :class="breakpoints">
		<component :is="item.component" v-bind="item.props" />
	</div>
</template>
<script lang="ts">
import { computed, defineComponent, useAsync } from '@nuxtjs/composition-api';
import useContentful, {
	BREAKPOINTS,
	getComponentByType,
} from '~/plugins/contentful';
import { GridSizes } from '~/plugins/image';
import { IGridItem, IGridItemFields } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => IGridItem,
			required: true,
		},
	},
	setup(props) {
		const { client } = useContentful();
		const gridItem = useAsync(
			() => client.getEntry<IGridItemFields>(props.entry.sys.id),
			props.entry.sys.id
		);
		const breakpoints = computed(() => {
			const classList: string[] = [];
			if (gridItem.value) {
				const fields = gridItem.value.fields;
				let size = 12;
				for (const bp of BREAKPOINTS) {
					size = fields[bp] || size;
					classList.push(`col-${bp}-${size}`);
				}
			}
			return classList.join(' ');
		});
		const item = computed(() => {
			if (gridItem.value) {
				return getComponentByType(
					gridItem.value.fields.component,
					gridItem.value.fields as GridSizes
				);
			}
		});
		return {
			breakpoints,
			item,
		};
	},
});
</script>
