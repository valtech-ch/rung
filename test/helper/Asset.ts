import { Asset, Sys } from 'contentful';

const sys: Sys = {
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
};

export const jpeg: Asset = {
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
	sys,
	toPlainObject: (): object => {
		return {};
	},
};

export const pdf: Asset = {
	fields: {
		file: {
			url: 'test.pdf',
			contentType: 'application/pdf',
			fileName: 'test.pdf',
			details: {
				size: 1000,
			},
		},
		title: 'title',
		description: 'description',
	},
	sys,
	toPlainObject: (): object => {
		return {};
	},
};
