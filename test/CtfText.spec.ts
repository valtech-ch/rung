import { mount } from '@vue/test-utils';

import { createModel } from './helper/TestUtils';
import { document } from './helper/Document';
import { IText, ITextFields } from '~/types/generated/contentful';
import CtfText from '~/components/CtfText.vue';

const entry = createModel<ITextFields, 'text', IText>(
	{
		title: 'Title',
		text: document,
	},
	'text'
);

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
