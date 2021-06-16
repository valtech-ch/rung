import { mount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';

import { createModel } from './helper/TestUtils';
import {
	IGridItem,
	IGridItemFields,
	ITitle,
	ITitleFields,
} from '~/types/generated/contentful';
import contentfulConfig from '~/.contentful.json';
import CtfGridItem from '~/components/ctf/content/GridItem.vue';

const title = createModel<ITitleFields, 'text', ITitle>(
	{
		component: 'h1',
		title: 'Title',
		variant: 'heading1',
	},
	'text'
);

const entry = createModel<IGridItemFields, 'grid', IGridItem>(
	{
		title: 'GridItem',
		component: title,
		xs: 1,
		sm: 2,
		md: 3,
		lg: 5,
		xl: 7,
	},
	'grid'
);

const entryNoBreakpoints = createModel<IGridItemFields, 'grid', IGridItem>(
	{
		title: 'GridItem',
		component: title,
	},
	'grid'
);

jest.mock('@nuxtjs/composition-api', () => ({
	...jest.requireActual('@nuxtjs/composition-api'),
	useContext: () => ({
		env: contentfulConfig,
	}),
	useAsync: () => ref(entry),
}));

describe('CtfGridItem', () => {
	it('renders', () => {
		const wrapper = mount(CtfGridItem, {
			propsData: {
				entry,
			},
			stubs: {
				CtfContentText: true,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		expect(wrapper.find('div').attributes('class')).toBe(
			'gridItem xs-1 sm-2 md-3 lg-5 xl-7'
		);
	});
	it('renders without breakpoints', () => {
		const wrapper = mount(CtfGridItem, {
			propsData: {
				entry: entryNoBreakpoints,
			},
			stubs: {
				CtfContentText: true,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		expect(wrapper.find('div').attributes('class')).toBe('gridItem');
	});
});
