<template>
	<nav role="navigation">
		<ul v-if="navigation">
			<li v-for="item in navigation.fields.items" :key="item.sys.id">
				<CtfLayoutNavigationItem :id="item.sys.id" />
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api';
import useContentful from '~/plugins/contentful';
import { INavigation } from '~/types/generated/contentful';

export default defineComponent({
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const { client } = useContentful();
		const navigation = useAsync(
			() => client.getEntry<INavigation>(props.id),
			props.id
		);
		return {
			navigation,
		};
	},
});
</script>
