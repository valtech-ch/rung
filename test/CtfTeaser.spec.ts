import { mount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';

import { jpeg } from './helper/Asset';
import { contentPage, createModel, NuxtLinkStub } from './helper/TestUtils';
import { ITeaser, ITeaserFields } from '~/types/generated/contentful';
import contentfulConfig from '~/.contentful.json';
import CtfTeaser from '~/components/ctf/content/Teaser.vue';

const entry = createModel<ITeaserFields, 'teaser', ITeaser>(
	{
		description: 'Description',
		image: jpeg,
		contentPage,
		pretitle: 'Pretitle',
		title: 'Title',
	},
	'teaser'
);

jest.mock('@nuxtjs/composition-api', () => ({
	...jest.requireActual('@nuxtjs/composition-api'),
	useContext: () => ({
		env: contentfulConfig,
	}),
	useAsync: () => ref(contentPage),
}));

describe('CtfTeaser', () => {
	it('renders', () => {
		const wrapper = mount(CtfTeaser, {
			propsData: {
				entry,
			},
			stubs: {
				NuxtLink: NuxtLinkStub,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		expect(wrapper.find('a').attributes('href')).toBe('/content-page');
		expect(wrapper.find('small').text()).toBe('Pretitle');
		expect(wrapper.find('strong').text()).toBe('Title');
		expect(wrapper.find('p').text()).toBe('Description');
		expect(wrapper.find('img').attributes('src')).toBe('test.jpg');
	});
});
