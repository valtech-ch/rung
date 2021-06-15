import { Entry, EntryCollection } from 'contentful';
import { IContentPage, IContentPageFields } from '~/types/generated/contentful';

export function createModel<
	TFields,
	TId extends string,
	TModel extends Entry<TFields>
>(fields: TFields, typeId: TId): TModel {
	const entry: Entry<TFields> = {
		fields,
		sys: {
			id: '1',
			type: '',
			createdAt: '',
			updatedAt: '',
			locale: '',
			contentType: {
				sys: {
					id: typeId,
					linkType: 'ContentType',
					type: 'Link',
				},
			},
		},
		toPlainObject: (): object => {
			return {};
		},
		update: (): Promise<Entry<TFields>> => {
			return new Promise(() => {});
		},
	};
	return entry as TModel;
}

export function createSingletonCollection<
	TFields,
	TId extends string,
	TModel extends Entry<TFields>
>(fields: TFields, typeId: TId): EntryCollection<TModel> {
	const item = createModel<TFields, TId, TModel>(fields, typeId);
	return {
		total: 1,
		skip: 0,
		limit: 0,
		items: [item as unknown as Entry<TModel>],
		toPlainObject: (): object => {
			return {};
		},
		stringifySafe: (): string => '',
	};
}

export const contentPage = createModel<
	IContentPageFields,
	'contentPage',
	IContentPage
>(
	{
		sections: [],
		slug: 'content-page',
		title: 'Content Page',
	},
	'contentPage'
);

export const contentPages = createSingletonCollection<
	IContentPageFields,
	'contentPage',
	IContentPage
>(
	{
		sections: [],
		slug: 'content-page',
		title: 'Content Page',
	},
	'contentPage'
);

export const NuxtLinkStub = {
	props: {
		to: {
			type: String,
			required: true,
		},
	},
	template: '<a :href="to"><slot /></a>',
};
