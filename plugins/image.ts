import { Asset } from 'contentful';
import { Breakpoint } from './contentful';

export interface GridSizes {
	xs: number;
	sm: number;
	md: number;
	lg: number;
	xl: number;
}

interface MediaSizes {
	xs: string;
	sm: string;
	md: string;
	lg: string;
	xl: string;
}

const MAX_WIDTH = 1200;
const COLUMN_WIDTH = MAX_WIDTH / 12;
const MAX_SIZES: GridSizes = {
	xs: 544,
	sm: 768,
	md: 992,
	lg: MAX_WIDTH,
	xl: MAX_WIDTH,
};
const MEDIA_SIZES: MediaSizes = {
	xs: `(max-width: ${MAX_SIZES.xs}px)`,
	sm: `(max-width: ${MAX_SIZES.sm}px)`,
	md: `(max-width: ${MAX_SIZES.md}px)`,
	lg: `(max-width: ${MAX_SIZES.lg}px)`,
	xl: ``,
};

function getSize(
	property: Breakpoint,
	columns?: GridSizes,
	isOnSide = false
): string {
	let colWidth = MAX_SIZES[property];
	if (columns) {
		colWidth = COLUMN_WIDTH * columns[property];
	}
	if (isOnSide) {
		colWidth = Math.ceil(colWidth / 3);
	}
	return `${MEDIA_SIZES[property]} ${colWidth}px`;
}
function getWidth(property: Breakpoint, isOnSide = false): number {
	if (isOnSide) {
		return Math.ceil(MAX_SIZES[property] / 3);
	}
	return MAX_SIZES[property];
}

export interface ImageAttributes {
	src: string;
	srcset: string;
	sizes: string;
	alt?: string;
}

export interface UseImageType {
	getAttributes(gridSizes?: GridSizes, isOnSide?: boolean): ImageAttributes;
}

export default function useImage(image: Asset, alt?: string): UseImageType {
	const url = image.fields.file.url;
	const src = `${url}?w=${MAX_WIDTH}`;

	const getAttributes = (columns?: GridSizes, isOnSide = false) => {
		const sizes: string[] = [];
		const widths: number[] = [];
		for (const bp of ['xs', 'sm', 'md', 'lg', 'xl']) {
			sizes.push(getSize(bp as Breakpoint, columns, isOnSide));
			widths.push(getWidth(bp as Breakpoint, isOnSide));
		}
		const srcset = widths.map((width) => `${url}?w=${width} ${width}w`);
		return {
			src,
			srcset: srcset.join(','),
			sizes: sizes.join(','),
			alt,
		};
	};
	return {
		getAttributes,
	};
}
