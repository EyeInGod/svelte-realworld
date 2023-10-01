import * as api from '$lib/api.js';
import { error, redirect } from '@sveltejs/kit';

export async function load({ locals, params }) {
    const [{ article }, { comments }] = await Promise.all([
        api.get(`articles/${params.slug}`, locals.user ?.token),
        api.get(`articles/${params.slug}/comments`, locals.user ?.token)
    ]) ;

    return { article, comments };
}

export const actions = {
    createComment: async ({ locals, params, request }) => {
		if (!locals.user) throw error(401);

		const data = await request.formData();

		await api.post(
			`articles/${params.slug}/comments`,
			{
				comment: {
					body: data.get('comment')
				}
			},
			locals.user.token
		);
	},
    deleteArticle: async ({ locals, params }) => {
		if (!locals.user) throw error(401);

		await api.del(`articles/${params.slug}`, locals.user.token);
		throw redirect(307, '/');
	},

}