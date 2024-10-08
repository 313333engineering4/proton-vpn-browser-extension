import {c} from '../tools/translate';

export const via = (classes = '') =>`<span class="via-country ${classes}" title="${
	/* translator: Tooltip/vocalization for the >> symbol between the entry country flag and the exit country flag when using Secure Core, for instance to connect to Sweden via Switzerland */
	c('Label').t`Via`
}"><svg aria-label="»" viewBox="0 0 24 24" fill="currentColor">
	<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 3.21967C11.1768 3.51256 11.1768 3.98744 11.4697 4.28033L19.1893 12L11.4697 19.7197C11.1768 20.0126 11.1768 20.4874 11.4697 20.7803C11.7626 21.0732 12.2374 21.0732 12.5303 20.7803L20.7803 12.5303C21.0732 12.2374 21.0732 11.7626 20.7803 11.4697L12.5303 3.21967C12.2374 2.92678 11.7626 2.92678 11.4697 3.21967ZM3.21967 3.21967C2.92678 3.51256 2.92678 3.98744 3.21967 4.28033L10.9393 12L3.21967 19.7197C2.92678 20.0126 2.92678 20.4874 3.21967 20.7803C3.51256 21.0732 3.98744 21.0732 4.28033 20.7803L12.5303 12.5303C12.8232 12.2374 12.8232 11.7626 12.5303 11.4697L4.28033 3.21967C3.98744 2.92678 3.51256 2.92678 3.21967 3.21967Z" />
</svg></span>`;
