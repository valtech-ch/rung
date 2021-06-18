import { mount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';

import { jpeg } from './helper/Asset';
import { contentPage, createModel, NuxtLinkStub } from './helper/TestUtils';
import { ITeaser, ITeaserFields } from '~/types/generated/contentful';
import contentfulConfig from '~/.contentful.json';
import CtfTeaser from '~/components/ctf/content/Teaser.vue';

const entryTop = createModel<ITeaserFields, 'teaser', ITeaser>(
	{
		description: 'Description',
		image: jpeg,
		imagePosition: 'top',
		contentPage,
		pretitle: 'Pretitle',
		title: 'Title',
	},
	'teaser'
);
const entryLeft = createModel<ITeaserFields, 'teaser', ITeaser>(
	{
		image: jpeg,
		imagePosition: 'left',
		contentPage,
		title: 'Title',
	},
	'teaser'
);
const entryNoImage = createModel<ITeaserFields, 'teaser', ITeaser>(
	{
		contentPage,
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
	it('renders image top', () => {
		const wrapper = mount(CtfTeaser, {
			propsData: {
				entry: entryTop,
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

		const img = wrapper.find('img');
		expect(img.attributes('src')).toBe('test.jpg?w=900');
		expect(img.attributes('srcset')).toBe(
			'test.jpg?w=300 300w,test.jpg?w=600 600w,test.jpg?w=900 900w'
		);
		expect(img.attributes('sizes')).toBe('100vw');
	});
	it('renders image left', () => {
		const wrapper = mount(CtfTeaser, {
			propsData: {
				entry: entryLeft,
			},
			stubs: {
				NuxtLink: NuxtLinkStub,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		const img = wrapper.find('img');
		expect(img.attributes('src')).toBe('test.jpg?w=300');
		expect(img.attributes('srcset')).toBe(
			'test.jpg?w=100 100w,test.jpg?w=200 200w,test.jpg?w=300 300w'
		);
		expect(img.attributes('sizes')).toBe('50vw');
	});
	it('renders no image', () => {
		const wrapper = mount(CtfTeaser, {
			propsData: {
				entry: entryNoImage,
			},
			stubs: {
				NuxtLink: NuxtLinkStub,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		expect(wrapper.find('img').exists()).toBeFalsy();
	});
});
