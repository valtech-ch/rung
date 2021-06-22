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
		expect(img.attributes('src')).toBe('test.jpg?w=1200');
		expect(img.attributes('srcset')).toBe(
			'test.jpg?w=544 544w,test.jpg?w=768 768w,test.jpg?w=992 992w,test.jpg?w=1200 1200w,test.jpg?w=1200 1200w'
		);
		expect(img.attributes('sizes')).toBe(
			'(max-width: 544px) 544px,(max-width: 768px) 768px,(max-width: 992px) 992px,(max-width: 1200px) 1200px, 1200px'
		);
		expect(img.attributes('alt')).toBe('Image');
		expect(wrapper.find('figcaption').text()).toBe('Caption');
	});
});
