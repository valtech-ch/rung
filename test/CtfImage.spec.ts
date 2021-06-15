import { mount } from '@vue/test-utils';

import { asset } from './helper/Asset';
import { createModel } from './helper/TestUtils';
import { IImage, IImageFields } from '~/types/generated/contentful';
import CtfImage from '~/components/ctf/content/Image.vue';

const entry = createModel<IImageFields, 'image', IImage>(
	{
		alt: 'Image',
		caption: 'Caption',
		image: asset,
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
		expect(img.attributes('src')).toBe('test.jpg');
		expect(img.attributes('alt')).toBe('Image');
		expect(wrapper.find('figcaption').text()).toBe('Caption');
	});
});
