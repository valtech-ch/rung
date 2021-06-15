import { mount } from '@vue/test-utils';
import { createModel } from './helper/TestUtils';
import {
	ILinkExternal,
	ILinkExternalFields,
} from '~/types/generated/contentful';
import CtfLinkExternal from '~/components/CtfLinkExternal.vue';

const entry = createModel<ILinkExternalFields, 'linkExternal', ILinkExternal>(
	{
		href: 'https://www.valtech.com',
		text: 'Valtech',
	},
	'linkExternal'
);

describe('CtfLinkExternal', () => {
	it('renders', () => {
		const wrapper = mount(CtfLinkExternal, {
			propsData: {
				entry,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		const anchor = wrapper.find('a');
		expect(anchor.text()).toContain('Valtech');
		expect(anchor.attributes('href')).toBe('https://www.valtech.com');
	});
});
