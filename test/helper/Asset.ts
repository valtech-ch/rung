import { Asset } from 'contentful';

export const asset: Asset = {
	fields: {
		file: {
			url: 'test.jpg',
			contentType: 'image/jpeg',
			fileName: 'test.jpg',
			details: {
				size: 1000,
			},
		},
		title: 'title',
		description: 'description',
	},
	sys: {
		id: '1',
		type: '',
		createdAt: '',
		updatedAt: '',
		locale: '',
		contentType: {
			sys: {
				id: 'asset',
				linkType: 'ContentType',
				type: 'Link',
			},
		},
	},
	toPlainObject: (): object => {
		return {};
	},
};
