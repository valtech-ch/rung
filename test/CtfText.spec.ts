import { mount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';

import { createModel } from './helper/TestUtils';
import { document } from './helper/Document';
import { IText, ITextFields } from '~/types/generated/contentful';
import contentfulConfig from '~/.contentful.json';
import CtfText from '~/components/CtfText.vue';

const entry = createModel<ITextFields, 'text', IText>(
	{
		title: 'Title',
		text: document,
	},
	'text'
);

jest.mock('@nuxtjs/composition-api', () => ({
	...jest.requireActual('@nuxtjs/composition-api'),
	useContext: () => ({
		env: contentfulConfig,
	}),
	useAsync: () => ref(entry),
}));

describe('CtfText', () => {
	it('renders', () => {
		const wrapper = mount(CtfText, {
			propsData: {
				entry,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		expect(wrapper.find('h1').text()).toBe('This is Ring');
		expect(wrapper.find('p').text()).toBe(
			"It's a project with two main purposes:"
		);
		expect(wrapper.find('ul').text()).toContain(
			'Explore the capabilities of Contentful as CMS.'
		);
		expect(wrapper.find('ul').text()).toContain(
			'Build a library of Core Components'
		);

		const anchors = wrapper.findAll('a');
		const internal = anchors.at(0);
		expect(internal.text()).toBe('list of components');
		expect(internal.attributes('href')).toBe('/components');
		const external = anchors.at(1);
		expect(external.text()).toBe('external link');
		expect(external.attributes('href')).toBe(
			'https://github.com/valtech-ch/ring'
		);
	});
});
