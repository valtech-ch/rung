import { mount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';

import { createModel } from './helper/TestUtils';
import { ICarousel, ICarouselFields } from '~/types/generated/contentful';
import contentfulConfig from '~/.contentful.json';
import CtfCarousel from '~/components/ctf/content/Carousel.vue';

const entry = createModel<ICarouselFields, 'carousel', ICarousel>(
	{
		title: 'Carousel',
		items: [],
	},
	'carousel'
);

jest.mock('@nuxtjs/composition-api', () => ({
	...jest.requireActual('@nuxtjs/composition-api'),
	useContext: () => ({
		env: contentfulConfig,
	}),
	useAsync: () => ref(entry),
}));

describe('CtfCarousel', () => {
	it('renders', () => {
		const wrapper = mount(CtfCarousel, {
			propsData: {
				entry,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		expect(wrapper.find('div').attributes('class')).toBe('carousel');
	});
});
