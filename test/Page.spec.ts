import { mount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';

import Homepage from '~/pages/index.vue';
import Slug from '~/pages/_slug/index.vue';

const route = {
	params: {
		slug: 'slug',
	},
};

jest.mock('@nuxtjs/composition-api', () => ({
	...jest.requireActual('@nuxtjs/composition-api'),
	useRoute: () => ref(route),
}));

describe('Page components', () => {
	it('renders home', () => {
		const wrapper = mount(Homepage);
		expect(wrapper.vm).toBeTruthy();
		expect(wrapper.find('div').attributes('class')).toBe('container');
	});
	it('renders slug', () => {
		const wrapper = mount(Slug);
		expect(wrapper.vm).toBeTruthy();
		expect(wrapper.find('div').attributes('class')).toBe('container');
	});
});
