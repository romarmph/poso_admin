// src/routes/login/+page.server.ts
import { fail, redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const actions = {
  default: async ({ request, url, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return fail(500, { message: 'Server error. Try again later.', success: false, email })
    }

    return redirect(303, '/');
  },
}

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
  const session = await getSession()

  if (session) {
    throw redirect(303, '/')
  }

  return { url: url.origin }
}