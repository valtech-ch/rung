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
import useImage from '~/plugins/image';
import { IContentPageFields, ITeaser } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => ITeaser,
			required: true,
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
		let sizes: string;
		let widths: number[];
		if (imagePosition === 'left' || imagePosition === 'right') {
			sizes = '20vw';
			widths = [100, 200, 300];
		} else {
			sizes = '100vw';
			widths = [300, 600, 900];
		}
		const image = props.entry.fields.image
			? useImage(props.entry.fields.image, sizes, widths)
			: null;
		return {
			contentPage,
			imagePosition,
			image,
		};
	},
});
</script>

<style scoped>
.teaser::after {
	display: block;
	content: '';
	clear: both;
}
.teaser small {
	display: block;
	font-weight: bold;
	margin-bottom: 0.6em;
}
.teaser.left img {
	float: left;
	margin-right: 2vw;
}
.teaser.right img {
	float: right;
	margin-left: 2vw;
}
</style>
