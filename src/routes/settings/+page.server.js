import * as api from '$lib/api.js';
import { fail, redirect } from '@sveltejs/kit';

export function load({ locals }) {
	if (!locals.user) throw redirect(302, '/login');
}

export const actions = {
    logout: async ({ cookies, locals }) => {
		cookies.delete('jwt', { path: '/' });
		locals.user = null;
	},
}