<template>
	<div class="gridItem" :class="breakpoints">
		<CtfContentButton v-if="type === 'button'" :entry="component" />
		<CtfContentImage v-if="type === 'image'" :entry="component" />
		<CtfContentTeaser v-if="type === 'teaser'" :entry="component" />
		<CtfContentTitle v-if="type === 'title'" :entry="component" />
	</div>
</template>
<script lang="ts">
import { computed, defineComponent, useAsync } from '@nuxtjs/composition-api';
import useContentful from '~/plugins/contentful';
import { IGridItem, IGridItemFields } from '~/types/generated/contentful';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

function addBreakpointClass(
	classList: string[],
	fields: IGridItemFields,
	property: Breakpoint
): void {
	if (fields[property]) {
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
		const component = computed(() => {
			return gridItem.value?.fields.component;
		});
		const type = computed(() => {
			return component.value?.sys.contentType.sys.id;
		});
		return {
			breakpoints,
			component,
			type,
		};
	},
});
</script>
