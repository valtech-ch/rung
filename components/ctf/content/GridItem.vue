<template>
	<div v-if="item" class="gridItem" :class="breakpoints">
		<component :is="item.component" v-bind="item.props" />
	</div>
</template>
<script lang="ts">
import { computed, defineComponent, useAsync } from '@nuxtjs/composition-api';
import useContentful, { getComponentByType } from '~/plugins/contentful';
import { IGridItem, IGridItemFields } from '~/types/generated/contentful';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

function addBreakpointClass(
	classList: string[],
	fields: IGridItemFields,
	property: Breakpoint
): void {
	if (fields && fields[property]) {
		classList.push(`${property}-${fields[property]}`);
	}
}

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
			for (const bp of ['xs', 'sm', 'md', 'lg', 'xl']) {
				addBreakpointClass(
					classList,
					props.entry.fields,
					bp as Breakpoint
				);
			}
			return classList.join(' ');
		});
		const item = computed(() => {
			if (gridItem.value) {
				return getComponentByType(gridItem.value.fields.component);
			}
		});
		return {
			breakpoints,
			item,
		};
	},
});
</script>
