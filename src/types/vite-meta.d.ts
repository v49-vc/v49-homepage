/* eslint-disable @typescript-eslint/naming-convention */

/**
 * This interface documents Vite Env variables
 * (also used for autocompletion)
 */
interface ImportMetaEnv {
	/** The Base domain from which the website is served. */
	readonly VITE_BASE_DOMAIN: string | undefined;
	/** When set to `"true"`, Plausible should be disabled */
	readonly VITE_DISABLE_PLAUSIBLE: string | undefined;
	/** A custom Build ID to differentiate builds. */
	readonly VITE_BUILD_ID: string | undefined;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
