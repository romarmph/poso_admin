import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { message, superValidate } from "sveltekit-superforms";
import ActionResultModals from "$lib/enums/ActionResultModals";
import { zod } from "sveltekit-superforms/adapters";
import { deleteSchema } from "$lib/schemas/app";

export const load: PageServerLoad = async ({
  locals: { supabase },
}) => {
  const tickets = await supabase.from("tickets").select().is("deleted_by", null);
  const form = await superValidate(zod(deleteSchema));

  return {
    tickets: tickets.data,
    form,
  };
};

export const actions: Actions = {
  delete: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const form = await superValidate(request, zod(deleteSchema));
    const user = await getCurrentUser();

    const { error } = await supabase.from("tickets").update({
      deleted_by: user!.id,
      deleted_at: new Date(),
    }).eq("id", form.data.id)

    if (error) {
      return message(form, {
        success: false,
        action: ActionResultModals.FailDelete,
      })
    }

    return message(form, {
      success: true,
      action: ActionResultModals.SuccessDelete,
    });
  }
}
