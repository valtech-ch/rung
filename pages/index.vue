<template>
	<div class="container">
		<CtfContentPage :slug="slug" />
	</div>
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
