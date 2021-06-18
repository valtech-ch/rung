<template>
	<main>
		<CtfLayoutNavigation :id="leftNavId" class="left-nav" />
		<CtfLayoutContentPage :slug="slug" />
	</main>
</template>

<script lang="ts">
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api';

const LEFT_NAV_ID = '3Wo7uCBqHdjVnhTY8GGJyG';

export default defineComponent({
	setup() {
		const route = useRoute();
		const slug = computed(() => route.value.params.slug);
		return {
			leftNavId: LEFT_NAV_ID,
			slug,
		};
	},
});
</script>
