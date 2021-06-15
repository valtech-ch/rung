import { mount } from '@vue/test-utils';
import { ref } from '@nuxtjs/composition-api';
import { contentPage, createModel, NuxtLinkStub } from './helper/TestUtils';
import { IButton, IButtonFields } from '~/types/generated/contentful';
import contentfulConfig from '~/.contentful.json';
import CtfButton from '~/components/ctf/content/Button.vue';

const entry = createModel<IButtonFields, 'button', IButton>(
	{
		link: contentPage,
		title: 'Button',
		variant: 'primary',
	},
	'button'
);

jest.mock('@nuxtjs/composition-api', () => ({
	...jest.requireActual('@nuxtjs/composition-api'),
	useContext: () => ({
		env: contentfulConfig,
	}),
	useAsync: () => ref(contentPage),
}));

describe('CtfButton', () => {
	it('renders', () => {
		const wrapper = mount(CtfButton, {
			propsData: {
				entry,
			},
			stubs: {
				NuxtLink: NuxtLinkStub,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		const anchor = wrapper.find('a');
		expect(anchor.text()).toBe('Button');
		expect(anchor.attributes('class')).toContain('primary');
		expect(anchor.attributes('href')).toBe('/content-page');
	});
});
