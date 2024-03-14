import { redirect } from '@sveltejs/kit'

export const POST = async ({ url, locals: { supabase } }) => {
  console.log("LOGOUT")

  throw redirect(303, '/')
}