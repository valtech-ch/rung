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
		const wrapper = mount(Homepage, {
			stubs: {
				CtfLayoutContentPage: true,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		expect(wrapper.find('main').exists()).toBeTruthy();
	});
	it('renders slug', () => {
		const wrapper = mount(Slug, {
			stubs: {
				CtfLayoutContentPage: true,
				CtfLayoutNavigation: true,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		expect(wrapper.find('main').exists()).toBeTruthy();
	});
});
