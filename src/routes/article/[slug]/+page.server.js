import * as api from '$lib/api.js';

export async function load({ locals, params }) {
    const [{ article }, { comments }] = await Promise.all([
        api.get(`articles/${params.slug}`, locals.user ?.token),
        api.get(`articles/${params.slug}/comments`, locals.user ?.token)
    ]) ;

    return { article, comments };
}

export const actions = {
    
}