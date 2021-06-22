<template>
	<div class="teaser" :class="imagePosition">
		<small v-if="entry.fields.pretitle">{{ entry.fields.pretitle }}</small>
		<NuxtLink v-if="contentPage" :to="`/${contentPage.fields.slug}`">
			<template v-if="imagePosition === 'bottom'">
				<div class="text">
					<strong>{{ entry.fields.title }}</strong>
					<p>{{ entry.fields.description }}</p>
				</div>
				<img v-if="image" v-bind="image" />
			</template>
			<template v-else>
				<img v-if="image" v-bind="image" />
				<div class="text">
					<strong>{{ entry.fields.title }}</strong>
					<p>{{ entry.fields.description }}</p>
				</div>
			</template>
		</NuxtLink>
	</div>
</template>
<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api';
import useContentful from '~/plugins/contentful';
import useImage, { GridSizes, ImageAttributes } from '~/plugins/image';
import { IContentPageFields, ITeaser } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => ITeaser,
			required: true,
		},
		gridSizes: {
			type: Object as () => GridSizes,
			default: undefined,
		},
	},
	setup(props) {
		const { client } = useContentful();
		const pageId = props.entry.fields.contentPage.sys.id;
		const contentPage = useAsync(
			() => client.getEntry<IContentPageFields>(pageId),
			pageId
		);
		const imagePosition = props.entry.fields.imagePosition;
		const isOnSide = imagePosition === 'left' || imagePosition === 'right';
		let image: ImageAttributes | null = null;
		if (props.entry.fields.image) {
			const { getAttributes } = useImage(props.entry.fields.image);
			image = getAttributes(props.gridSizes, isOnSide);
		}
		return {
			contentPage,
			imagePosition,
			image,
		};
	},
});
</script>

<style scoped>
.teaser small {
	display: block;
	font-weight: bold;
	margin-bottom: 0.6em;
}
.teaser.left a {
	display: grid;
	grid-template-columns: 1fr 2fr;
}
.teaser.left img {
	margin-right: 1em;
}
.teaser.right a {
	display: grid;
	grid-template-columns: 2fr 1fr;
}
.teaser.right img {
	margin-left: 1em;
}
</style>
