<template>
	<div v-if="navItem">
		<NuxtLink :to="navItem.fields.page.fields.slug">{{
			navItem.fields.title
		}}</NuxtLink>
		<ul v-if="navItem.fields.children">
			<li v-for="child in navItem.fields.children" :key="child.sys.id">
				<CtfLayoutNavigationItem :id="child.sys.id" />
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api';
import useContentful from '~/plugins/contentful';
import { INavigationItem } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const { client } = useContentful();
		const navItem = useAsync(
			() => client.getEntry<INavigationItem>(props.id),
			props.id
		);
		return {
			navItem,
		};
	},
});
</script>
