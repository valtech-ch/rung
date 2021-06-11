import { Entry } from 'contentful';

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
