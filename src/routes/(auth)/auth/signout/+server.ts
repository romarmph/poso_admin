import { fail, redirect, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ url, locals: { supabase } }) => {
  const session = await supabase.auth.getSession();

  if (session) {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw fail(500);
    }
  }

  return redirect(303, "/");
};
