import { mount } from '@vue/test-utils';

import { createModel } from './helper/TestUtils';
import { IGrid, IGridFields } from '~/types/generated/contentful';
import CtfGrid from '~/components/ctf/content/Grid.vue';

const entry = createModel<IGridFields, 'grid', IGrid>(
	{
		title: 'Grid',
		items: [],
		spacing: 15,
	},
	'grid'
);

describe('CtfGrid', () => {
	it('renders', () => {
		const wrapper = mount(CtfGrid, {
			propsData: {
				entry,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		expect(wrapper.find('div').attributes('class')).toBe('grid');
	});
});
