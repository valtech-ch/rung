// import { mount } from '@vue/test-utils';

import { createModel } from './helper/TestUtils';
import { ITitle, ITitleFields } from '~/types/generated/contentful';

describe('ArticlePreview', () => {
	it('renders', () => {
		/*
		const wrapper = mount(ArticlePreview, {
			propsData: {
				article: blogPost,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		expect(wrapper.find('img').attributes('src')).toBe('test.jpg');
		expect(wrapper.find('h3').text()).toContain('Test Article');
		expect(wrapper.find('small').text()).toContain('May 12, 2017');
		expect(wrapper.find('p').text()).toContain('Test description');
		*/

		const text = createModel<ITitleFields, 'text', ITitle>(
			{
				title: 'Title',
				variant: 'heading1',
			},
			'text'
		);

		expect(text.fields.title).toBe('Title');
	});
});
