import * as api from '$lib/api.js';
import { fail, redirect } from '@sveltejs/kit';

export async function load({ parent }) {
	const { user } = await parent();
	if (user) throw redirect(307, '/');
}

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        
        const user = {
            username: data.get('username'),
            email: data.get('email'),
            password: data.get('password'),
        }

		const body = await api.post('users', { user });

        if (body.errors) {
			return fail(401, body);
		}

        const value = btoa(JSON.stringify(body.user));
		cookies.set('jwt', value, { path: '/' });

		throw redirect(307, '/');
    }
}