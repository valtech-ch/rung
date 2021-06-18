import { mount } from '@vue/test-utils';

import { jpeg } from './helper/Asset';
import { createModel } from './helper/TestUtils';
import { IImage, IImageFields } from '~/types/generated/contentful';
import CtfImage from '~/components/ctf/content/Image.vue';

const entry = createModel<IImageFields, 'image', IImage>(
	{
		alt: 'Image',
		caption: 'Caption',
		image: jpeg,
	},
	'image'
);

describe('CtfImage', () => {
	it('renders', () => {
		const wrapper = mount(CtfImage, {
			propsData: {
				entry,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		const img = wrapper.find('img');
		expect(img.attributes('src')).toBe('test.jpg?w=900');
		expect(img.attributes('srcset')).toBe(
			'test.jpg?w=300 300w,test.jpg?w=600 600w,test.jpg?w=900 900w'
		);
		expect(img.attributes('sizes')).toBe('100vw');
		expect(img.attributes('alt')).toBe('Image');
		expect(wrapper.find('figcaption').text()).toBe('Caption');
	});
});
