import { mount } from '@vue/test-utils';

import { pdf } from './helper/Asset';
import { createModel } from './helper/TestUtils';
import { IDownload, IDownloadFields } from '~/types/generated/contentful';
import CtfDownload from '~/components/ctf/content/Download.vue';

const entry = createModel<IDownloadFields, 'download', IDownload>(
	{
		file: pdf,
		text: 'test',
	},
	'download'
);

describe('CtfDownload', () => {
	it('renders', () => {
		const wrapper = mount(CtfDownload, {
			propsData: {
				entry,
			},
		});
		expect(wrapper.vm).toBeTruthy();
		const anchor = wrapper.find('a');
		expect(anchor.attributes('href')).toBe('test.pdf');
		expect(anchor.text()).toBe('test.pdf');
	});
});
