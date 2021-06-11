import { mount } from '@vue/test-utils';

import { asset } from './helper/Asset';
import { createModel } from './helper/TestUtils';
import { ITeaser, ITeaserFields } from '~/types/generated/contentful';
import CtfTeaser from '~/components/CtfTeaser.vue';

const entry = createModel<ITeaserFields, 'teaser', ITeaser>(
	{
		title: 'Title',
		pretitle: 'Pretitle',
		description: 'Description',
		image: asset,
	},
	'teaser'
);

describe('CtfTeaser', () => {
	it('renders', () => {
		const wrapper = mount(CtfTeaser, {
			propsData: {
				entry,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		expect(wrapper.find('small').text()).toContain('Pretitle');
		expect(wrapper.find('strong').text()).toContain('Title');
		expect(wrapper.find('p').text()).toContain('Description');
		expect(wrapper.find('img').attributes('src')).toBe('test.jpg');
	});
});