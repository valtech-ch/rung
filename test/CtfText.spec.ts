import { mount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';

import { contentPages, createModel } from './helper/TestUtils';
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
	useAsync: () => ref(contentPages),
}));

describe('CtfText', () => {
	it('renders', () => {
		const wrapper = mount(CtfText, {
			propsData: {
				entry,
			},
		});
		expect(wrapper.vm).toBeTruthy();
	});
});
