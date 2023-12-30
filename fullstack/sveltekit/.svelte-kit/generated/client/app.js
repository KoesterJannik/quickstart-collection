export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10')
];

export const server_loads = [2];

export const dictionary = {
		"/": [5],
		"/(authenticated)/authenticated/dashboard": [6,[2,3]],
		"/(authenticated)/authenticated/products": [7,[2,3]],
		"/(authenticated)/authenticated/profile": [~8,[2,3]],
		"/(public)/login": [~9,[4]],
		"/(public)/register": [~10,[4]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';