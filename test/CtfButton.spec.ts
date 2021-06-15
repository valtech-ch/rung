import { shallowMount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';
import { contentPage, createModel, localVue } from './helper/TestUtils';
import NuxtLink from '~/.nuxt/components/nuxt-link.client';
import { IButton, IButtonFields } from '~/types/generated/contentful';
import contentfulConfig from '~/.contentful.json';
import CtfButton from '~/components/CtfButton.vue';

const entry = createModel<IButtonFields, 'button', IButton>(
	{
		link: contentPage,
		title: 'Button',
		variant: 'primary',
	},
	'button'
);


jest.mock('@nuxtjs/composition-api', () => ({
	...jest.requireActual('@nuxtjs/composition-api'),
	useContext: () => ({
		env: contentfulConfig,
	}),
	useAsync: () => ref(contentPage),
}));

describe('CtfButton', () => {
	it('renders', () => {
		const wrapper = shallowMount(CtfButton, {
			propsData: {
				entry,
			},
			localVue,
		});
		expect(wrapper.vm).toBeTruthy();
		const anchor = wrapper.findComponent(NuxtLink);
		expect(anchor.text()).toContain('Button');
		expect(anchor.attributes('class')).toContain('primary');
		expect(anchor.attributes('to')).toBe('/content-page');
	});
});