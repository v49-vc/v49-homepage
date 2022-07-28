/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

export const CANONICAL_BASE_DOMAIN: string = import.meta.env.VITE_BASE_DOMAIN || 'v49.vc';
export const BUILD_ID: string = import.meta.env.VITE_BUILD_ID || 'dev-build';

/**
 * Given an asset URL from the root (starts with `/`),
 * return a URL with the the full domain to the asset.
 *
 * Use `.href` on the returned object to get the full URL.
 */
export function urlForAsset(relativePath: string): URL {
	return new URL(relativePath, `https://${CANONICAL_BASE_DOMAIN}`);
}
