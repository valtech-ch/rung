// import { mount } from '@vue/test-utils';

import { createModel } from './helper/TestUtils';
import { IText, ITextFields } from '~/types/generated/contentful';

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

		const text = createModel<ITextFields, 'text', IText>({
				title: 'Title',
				text: 'Text',
			},
			'text'
		);

		expect(text.fields.text).toBe('Text');
	});
});
