import { useContext } from '@nuxtjs/composition-api';
import {
	ContentfulClientApi,
	CreateClientParams,
	createClient,
} from 'contentful';
import { GridSizes } from './image';
import {
	ICarousel,
	IDownload,
	IGrid,
	IImage,
	ILink,
	ILinkExternal,
	ITeaser,
	IText,
	ITitle,
} from '~/types/generated/contentful';

export interface UseContentfulType {
	client: ContentfulClientApi;
}

export interface CtfComponent {
	component: string;
	props: {
		entry:
			| ICarousel
			| IDownload
			| IGrid
			| IImage
			| ILink
			| ILinkExternal
			| ITeaser
			| IText
			| ITitle;
		gridSizes?: GridSizes;
	};
	id: string;
}

export function getComponentByType(
	entry:
		| ICarousel
		| IDownload
		| IGrid
		| IImage
		| ILink
		| ILinkExternal
		| ITeaser
		| IText
		| ITitle,
	gridSizes?: GridSizes
): CtfComponent {
	let component = 'div';
	switch (entry.sys.contentType.sys.id) {
		case 'carousel':
			component = 'CtfContentCarousel';
			break;
		case 'download':
			component = 'CtfContentDownload';
			break;
		case 'grid':
			component = 'CtfContentGrid';
			break;
		case 'image':
			component = 'CtfContentImage';
			break;
		case 'link':
			component = 'CtfContentLink';
			break;
		case 'linkExternal':
			component = 'CtfContentLinkExternal';
			break;
		case 'teaser':
			component = 'CtfContentTeaser';
			break;
		case 'text':
			component = 'CtfContentText';
			break;
		case 'title':
			component = 'CtfContentTitle';
			break;
	}
	return {
		component,
		props: { entry, gridSizes },
		id: entry.sys.id,
	};
}

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export default function useContentful(): UseContentfulType {
	const { env } = useContext();
	const config: CreateClientParams = {
		space: env.CTF_SPACE_ID || '',
		accessToken: env.CTF_CDA_ACCESS_TOKEN || '',
	};
	const client = createClient(config);
	return {
		client,
	};
}
