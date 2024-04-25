// src/routes/login/+page.server.ts
import { fail, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import Roles from "$lib/enums/Roles";

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
      const { data: employees } = await supabase.from("employees").select().eq("user_id", user.id);
      if (!employees) {
        return fail(500, {
          message: "Error signing in, please contact system admin",
          success: false,
        })
      }

      if (
        employees[0].role !== Roles.SUPERADMIN &&
        employees[0].role !== Roles.STAFF
      ) {
        await supabase.auth.signOut();
        return fail(500, {
          message:
            "Unauthorized Access. Please contact  your system administrator immediately.",
          success: false,
        });
      }
    }

    return redirect(300, "/");
  },
};

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
  const session = await getSession();

  if (session) {
    throw redirect(303, "/");
  }

  return { url: url.origin };
};
