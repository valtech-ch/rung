import { mount } from '@vue/test-utils';

import { createModel } from './helper/TestUtils';
import { ITitle, ITitleFields } from '~/types/generated/contentful';
import CtfTitle from '~/components/CtfTitle.vue';

const entry = createModel<ITitleFields, 'text', ITitle>(
	{
		component: 'h1',
		title: 'Title',
		variant: 'heading1',
	},
	'text'
);

describe('CtfTitle', () => {
	it('renders', () => {
		const wrapper = mount(CtfTitle, {
			propsData: {
				entry,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		const h1 = wrapper.find('h1');
		expect(h1.text()).toContain('Title');
		expect(h1.attributes('class')).toBe('heading1');
	});
});
