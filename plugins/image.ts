import { Asset } from 'contentful';
import { Breakpoint, BREAKPOINTS } from './contentful';

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

	const getAttributes = (columns?: GridSizes, isOnSide = false) => {
		let src = `${url}?w=${MAX_WIDTH}`;
		if (isOnSide) {
			src = `${url}?w=${MAX_WIDTH / 3}`;
		}
		const sizes: string[] = [];
		const widths: number[] = [];
		let colSpan = 12;
		for (const bp of BREAKPOINTS) {
			let colWidth = MAX_SIZES[bp];
			let width = MAX_SIZES[bp];
			if (columns) {
				colSpan = columns[bp] || colSpan;
				colWidth = COLUMN_WIDTH * colSpan;
			}
			if (isOnSide) {
				colWidth = Math.ceil(colWidth / 3);
				width = Math.ceil(MAX_SIZES[bp] / 3);
			}
			sizes.push(`${MEDIA_SIZES[bp]} ${colWidth}px`);
			widths.push(width);
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
