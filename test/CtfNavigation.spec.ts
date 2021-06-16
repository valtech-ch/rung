import { mount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';
import { createModel } from './helper/TestUtils';
import { INavigation, INavigationFields } from '~/types/generated/contentful';
import contentfulConfig from '~/.contentful.json';
import CtfNavigation from '~/components/ctf/layout/Navigation.vue';

const entry = createModel<INavigationFields, 'navigationItem', INavigation>(
	{
		items: [],
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

describe('CtfNavigation', () => {
	it('renders', () => {
		const wrapper = mount(CtfNavigation, {
			propsData: {
				id: '1',
			},
		});
		expect(wrapper.vm).toBeTruthy();
		expect(wrapper.find('nav').attributes('role')).toBe('navigation');
	});
});
