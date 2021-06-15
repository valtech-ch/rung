import { BLOCKS, Document, INLINES } from '@contentful/rich-text-types';

export const document: Document = {
	nodeType: BLOCKS.DOCUMENT,
	content: [
		{
			nodeType: BLOCKS.HEADING_1,
			content: [
				{
					nodeType: 'text',
					value: 'This is Ring',
					marks: [],
					data: {},
				},
			],
			data: {},
		},
		{
			nodeType: BLOCKS.PARAGRAPH,
			content: [
				{
					nodeType: 'text',
					value: "It's a project with two main purposes:",
					marks: [],
					data: {},
				},
			],
			data: {},
		},
		{
			nodeType: BLOCKS.UL_LIST,
			content: [
				{
					nodeType: BLOCKS.LIST_ITEM,
					content: [
						{
							nodeType: BLOCKS.PARAGRAPH,
							content: [
								{
									nodeType: 'text',
									value: 'Explore the capabilities of Contentful as CMS.',
									marks: [],
									data: {},
								},
							],
							data: {},
						},
					],
					data: {},
				},
				{
					nodeType: BLOCKS.LIST_ITEM,
					content: [
						{
							nodeType: BLOCKS.PARAGRAPH,
							content: [
								{
									nodeType: 'text',
									value: 'Build a library of Core Components to speed up the process of building web applications with React and Contentful.',
									marks: [],
									data: {},
								},
							],
							data: {},
						},
					],
					data: {},
				},
			],
			data: {},
		},
		{
			nodeType: BLOCKS.PARAGRAPH,
			content: [
				{
					nodeType: 'text',
					value: "In this website you'll find the available core components and its variants. All the content is coming from Contentful and the magic is done by Valtech CH.",
					marks: [],
					data: {},
				},
			],
			data: {},
		},
		{
			nodeType: BLOCKS.PARAGRAPH,
			content: [
				{
					nodeType: 'text',
					value: "Let's start with the ",
					marks: [],
					data: {},
				},
				{
					nodeType: INLINES.ENTRY_HYPERLINK,
					content: [
						{
							nodeType: 'text',
							value: 'list of components',
							marks: [],
							data: {},
						},
					],
					data: {
						target: {
							metadata: { tags: [] },
							sys: {
								space: {
									sys: {
										type: 'Link',
										linkType: 'Space',
										id: '54qcnb7au56m',
									},
								},
								id: 'QUfIK1T2dFDnubS5Ztc9N',
								type: 'Entry',
								environment: {
									sys: {
										id: 'master',
										type: 'Link',
										linkType: 'Environment',
									},
								},
								revision: 1,
								contentType: {
									sys: {
										type: 'Link',
										linkType: 'ContentType',
										id: 'contentPage',
									},
								},
								locale: 'en',
							},
							fields: {
								title: 'Components',
								slug: 'components',
								sections: [
									{
										sys: {
											type: 'Link',
											linkType: 'Entry',
											id: 'trU1xmnmAsqJmhapxHFce',
										},
									},
								],
							},
						},
					},
				},
				{ nodeType: 'text', value: '.', marks: [], data: {} },
			],
			data: {},
		},
		{
			nodeType: BLOCKS.PARAGRAPH,
			content: [
				{ nodeType: 'text', value: 'And some ', marks: [], data: {} },
				{
					nodeType: INLINES.HYPERLINK,
					content: [
						{
							nodeType: 'text',
							value: 'external link',
							marks: [],
							data: {},
						},
					],
					data: { uri: 'https://github.com/valtech-ch/ring' },
				},
				{ nodeType: 'text', value: '.', marks: [], data: {} },
			],
			data: {},
		},
	],
	data: {},
};
