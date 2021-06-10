const DATE_FORMAT = new Intl.DateTimeFormat('en', {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
});

export const CTF_BLOG_POST_TYPE_ID = 'blogPost';

export function formatDate(dateParam: string | Date): string {
	let date: Date;
	if (typeof dateParam === 'string') {
		date = new Date(dateParam);
	} else {
		date = dateParam;
	}
	return DATE_FORMAT.format(date);
}
