import { mount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';
import { contentPages } from './helper/TestUtils';
import contentfulConfig from '~/.contentful.json';
import CtfContentPage from '~/components/ctf/layout/ContentPage.vue';

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
		expect(wrapper.find('h1').text()).toBe('Content Page');
	});
});
