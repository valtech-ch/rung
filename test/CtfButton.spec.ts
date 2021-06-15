import { shallowMount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';
import { contentPage, createModel, localVue } from './helper/TestUtils';
import NuxtLink from '~/.nuxt/components/nuxt-link.client';
import { IButton, IButtonFields } from '~/types/generated/contentful';
import contentfulConfig from '~/.contentful.json';
import CtfButton from '~/components/ctf/content/Button.vue';

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
		const link = wrapper.findComponent(NuxtLink);
		expect(link.text()).toBe('Button');
		expect(link.attributes('class')).toContain('primary');
		expect(link.attributes('to')).toBe('/content-page');
	});
});
