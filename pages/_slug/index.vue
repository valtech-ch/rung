<template>
	<div class="container">
		<ContentPage :slug="slug" />
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api';

export default defineComponent({
	setup() {
		const route = useRoute();
		const slug = computed(() => route.value.params.slug);
		return {
			slug,
		};
	},
});
</script>
