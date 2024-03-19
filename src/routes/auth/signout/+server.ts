import { fail, redirect } from '@sveltejs/kit'

export const POST = async ({ url, locals: { supabase } }) => {
  const session = await supabase.auth.getSession();


  if(session) {
    const { error } = await supabase.auth.signOut();
 

    if(error) {
      throw fail(500);
    }
  }

  throw redirect(303, '/')
}