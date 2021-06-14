import { mount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';
import { createSingletonCollection } from './helper/TestUtils';
import { IContentPage, IContentPageFields } from '~/types/generated/contentful';
import contentfulConfig from '~/.contentful.json';
import CtfContentPage from '~/components/CtfContentPage.vue';

const contentPages = createSingletonCollection<
	IContentPageFields,
	'contentPage',
	IContentPage
>(
	{
		sections: [],
		slug: 'content-page',
		title: 'Content Page',
	},
	'contentPage'
);

jest.mock('@nuxtjs/composition-api', () => ({
	...jest.requireActual('@nuxtjs/composition-api'),
	useContext: () => ({
		env: contentfulConfig,
	}),
	useAsync: () => ref(contentPages),
}));

describe('CtfContentPage', () => {
	it('renders', () => {
		const wrapper = mount(CtfContentPage, {
			propsData: {
				slug: 'content-page',
			},
		});
		expect(wrapper.vm).toBeTruthy();
		expect(wrapper.find('h1').text()).toContain('Content Page');
	});
});
