/*
 * The following allows us to prepend `&imagetools` to an image
 * and have TypeScript not complain.
 *
 * Idea from: https://github.com/JonasKruckenberg/imagetools/issues/160
 */
declare module '*&imagetools' {
	const src: string;
	export default src;
}
