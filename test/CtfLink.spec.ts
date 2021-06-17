import { mount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';
import { contentPage, createModel, NuxtLinkStub } from './helper/TestUtils';
import { ILink, ILinkFields } from '~/types/generated/contentful';
import contentfulConfig from '~/.contentful.json';
import CtfLink from '~/components/ctf/content/Link.vue';

const entry = createModel<ILinkFields, 'link', ILink>(
	{
		contentPage,
		text: 'Link',
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
		const wrapper = mount(CtfLink, {
			propsData: {
				entry,
			},
			stubs: {
				NuxtLink: NuxtLinkStub,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		const anchor = wrapper.find('a');
		expect(anchor.text()).toBe('Link');
		expect(anchor.attributes('href')).toBe('/content-page');
	});
});
