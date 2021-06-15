import { mount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';
import { contentPage, createModel, NuxtLinkStub } from './helper/TestUtils';
import {
	INavigationItem,
	INavigationItemFields,
} from '~/types/generated/contentful';
import contentfulConfig from '~/.contentful.json';
import CtfNavigationItem from '~/components/ctf/layout/NavigationItem.vue';

const entry = createModel<
	INavigationItemFields,
	'navigationItem',
	INavigationItem
>(
	{
		page: contentPage,
		title: 'Link',
	},
	'navigationItem'
);

jest.mock('@nuxtjs/composition-api', () => ({
	...jest.requireActual('@nuxtjs/composition-api'),
	useContext: () => ({
		env: contentfulConfig,
	}),
	useAsync: () => ref(entry),
}));

describe('CtfNavigationItem', () => {
	it('renders', () => {
		const wrapper = mount(CtfNavigationItem, {
			propsData: {
				id: '1',
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
