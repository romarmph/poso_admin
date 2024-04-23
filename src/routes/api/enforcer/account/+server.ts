import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, locals: { supabase } }) => {

	const raw = await request.arrayBuffer();
	const bodyString = new TextDecoder().decode(raw);
	const body = JSON.parse(bodyString);

	const { data, error } = await supabase.auth.admin.getUserById(body.user_id);

	if (error) {
		return new Response(JSON.stringify(error))
	}

	return new Response(JSON.stringify(data));
};
