// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface IButtonFields {
	/** Title */
	title: string;

	/** Link */
	link: IContentPage;

	/** Variant */
	variant: 'primary' | 'secondary';
}

export interface IButton extends Entry<IButtonFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'button';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}

export interface ICarouselFields {
	/** Title */
	title?: string | undefined;

	/** Items */
	items?: (IImage | ITeaser)[] | undefined;
}

export interface ICarousel extends Entry<ICarouselFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'carousel';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}

export interface IConfigFields {
	/** Title */
	title: 'Config';

	/** Navigation */
	navigation?: IContentPage[] | undefined;
}

export interface IConfig extends Entry<IConfigFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'config';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}

export interface IContentPageFields {
	/** Title */
	title: string;

	/** Slug */
	slug: string;

	/** Sections */
	sections: (
		| IButton
		| ICarousel
		| IGrid
		| IImage
		| ILink
		| ILinkExternal
		| ITeaser
		| IText
		| ITitle
	)[];
}

export interface IContentPage extends Entry<IContentPageFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'contentPage';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}

export interface IGridFields {
	/** Title */
	title: string;

	/** Items */
	items: IGridItem[];

	/** spacing */
	spacing?: number | undefined;
}

export interface IGrid extends Entry<IGridFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'grid';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}

export interface IGridItemFields {
	/** Title */
	title: string;

	/** component */
	component:
		| IButton
		| IImage
		| ILink
		| ILinkExternal
		| ITeaser
		| IText
		| ITitle;

	/** xs */
	xs?: number | undefined;

	/** sm */
	sm?: number | undefined;

	/** md */
	md?: number | undefined;

	/** lg */
	lg?: number | undefined;

	/** xl */
	xl?: number | undefined;
}

export interface IGridItem extends Entry<IGridItemFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'gridItem';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}

export interface IImageFields {
	/** Image */
	image: Asset;

	/** Alt */
	alt: string;

	/** Caption */
	caption?: string | undefined;
}

export interface IImage extends Entry<IImageFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'image';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}

export interface ILinkFields {
	/** Text */
	text: string;

	/** Link */
	link: IContentPage;
}

export interface ILink extends Entry<ILinkFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'link';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}

export interface ILinkExternalFields {
	/** Text */
	text: string;

	/** href */
	href: string;
}

export interface ILinkExternal extends Entry<ILinkExternalFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'linkExternal';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}

export interface INavigationFields {
	/** Title */
	title: string;

	/** items */
	items: INavigationItem[];
}

export interface INavigation extends Entry<INavigationFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'navigation';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}

export interface INavigationItemFields {
	/** Title */
	title: string;

	/** page */
	page: IContentPage;

	/** children */
	children?: INavigationItem[] | undefined;
}

export interface INavigationItem extends Entry<INavigationItemFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'navigationItem';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}

export interface ITeaserFields {
	/** Pretitle */
	pretitle?: string | undefined;

	/** Title */
	title: string;

	/** Description */
	description?: string | undefined;

	/** Image */
	image?: Asset | undefined;
}

export interface ITeaser extends Entry<ITeaserFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'teaser';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}

export interface ITextFields {
	/** Title */
	title: string;

	/** Text */
	text: Document;
}

export interface IText extends Entry<ITextFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'text';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}

export interface ITitleFields {
	/** Title */
	title: string;

	/** Variant */
	variant:
		| 'heading1'
		| 'heading2'
		| 'heading3'
		| 'heading4'
		| 'heading5'
		| 'heading6'
		| 'body1'
		| 'body2';

	/** Component */
	component?:
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'p'
		| 'span'
		| 'strong'
		| undefined;
}

export interface ITitle extends Entry<ITitleFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'title';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}

export type CONTENT_TYPE =
	| 'button'
	| 'carousel'
	| 'config'
	| 'contentPage'
	| 'grid'
	| 'gridItem'
	| 'image'
	| 'link'
	| 'linkExternal'
	| 'navigation'
	| 'navigationItem'
	| 'teaser'
	| 'text'
	| 'title';

export type LOCALE_CODE = 'de' | 'en';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en';
