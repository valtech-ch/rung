<template>
	<main>
		<CtfLayoutContentPage :slug="slug" />
	</main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
	setup() {
		return {
			slug: 'home',
		};
	},
});
</script>
