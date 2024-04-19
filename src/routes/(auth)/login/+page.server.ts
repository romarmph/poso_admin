// src/routes/login/+page.server.ts
import { fail, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const actions: Actions = {
  default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const {
      error,
      data: { user },
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (error.message === "Invalid login credentials") {
        return fail(500, {
          message: "Incorrect email or password.",
          success: false,
          email,
        });
      }

      return fail(500, {
        message: "Server error. Try again later.",
        success: false,
      });
    }

    if (user) {
      if (
        user.user_metadata.role !== "superadmin" &&
        user.user_metadata.role !== "staff"
      ) {
        await supabase.auth.signOut();
        return fail(500, {
          message:
            "Unauthorized Access. Please contact  your system administrator immediately.",
          success: false,
        });
      }
    }

    return redirect(303, "/");
  },
};

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
  const session = await getSession();

  if (session) {
    throw redirect(303, "/");
  }

  return { url: url.origin };
};
