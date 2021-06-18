import { Asset } from 'contentful';

export interface ImageAttributes {
	src: string;
	srcset: string;
	sizes: string;
	alt?: string;
}

export default function useImage(
	image: Asset,
	sizes: string,
	widths: number[],
	alt?: string
): ImageAttributes {
	const url = image.fields.file.url;
	const src = `${url}?w=${Math.max(...widths)}`;
	const srcset = widths.map((width) => `${url}?w=${width} ${width}w`);
	return {
		src,
		srcset: srcset.join(','),
		sizes,
		alt,
	};
}
