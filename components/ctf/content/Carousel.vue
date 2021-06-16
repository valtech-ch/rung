<template>
	<div v-if="items" class="carousel">
		<div v-for="item in items" :key="item.id" class="carouselItem">
			<component :is="item.component" v-bind="item.props" />
		</div>
	</div>
</template>
<script lang="ts">
import { computed, defineComponent, useAsync } from '@nuxtjs/composition-api';
import useContentful, { getComponentByType } from '~/plugins/contentful';
import { ICarousel, ICarouselFields } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => ICarousel,
			required: true,
		},
	},
	setup(props) {
		const { client } = useContentful();
		const carousel = useAsync(
			() => client.getEntry<ICarouselFields>(props.entry.sys.id),
			props.entry.sys.id
		);
		const items = computed(() =>
			carousel.value?.fields.items?.map(getComponentByType)
		);
		return {
			items,
		};
	},
});
</script>
