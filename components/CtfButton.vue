<template>
	<NuxtLink class="btn" :class="entry.fields.variant" :to="slug">{{
		entry.fields.title
	}}</NuxtLink>
</template>
<script lang="ts">
import { computed, defineComponent, useAsync } from '@nuxtjs/composition-api';
import useContentful from '~/plugins/contentful';
import { IButton, IContentPage } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		entry: {
			type: Object as () => IButton,
			required: true,
		},
	},
	setup(props) {
		const { client } = useContentful();
		const contentPage = useAsync(() =>
			client.getEntry<IContentPage>(props.entry.fields.link.sys.id)
		);
		const slug = computed(() => {
			if (contentPage.value) {
				return contentPage.value.fields.slug;
			}
		});
		return {
			slug,
		};
	},
});
</script>
