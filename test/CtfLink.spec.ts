import { shallowMount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';
import { contentPage, createModel, localVue } from './helper/TestUtils';
import NuxtLink from '~/.nuxt/components/nuxt-link.client';
import { ILink, ILinkFields } from '~/types/generated/contentful';
import contentfulConfig from '~/.contentful.json';
import CtfLink from '~/components/CtfLink.vue';

const entry = createModel<ILinkFields, 'link', ILink>(
	{
		link: contentPage,
		title: 'Link',
	},
	'link'
);

jest.mock('@nuxtjs/composition-api', () => ({
	...jest.requireActual('@nuxtjs/composition-api'),
	useContext: () => ({
		env: contentfulConfig,
	}),
	useAsync: () => ref(contentPage),
}));

describe('CtfLink', () => {
	it('renders', () => {
		const wrapper = shallowMount(CtfLink, {
			propsData: {
				entry,
			},
			localVue,
		});
		expect(wrapper.vm).toBeTruthy();
		const anchor = wrapper.findComponent(NuxtLink);
		expect(anchor.text()).toContain('Link');
		expect(anchor.attributes('to')).toBe('/content-page');
	});
});
