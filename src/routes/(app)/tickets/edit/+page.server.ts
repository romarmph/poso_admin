import { redirect, type Actions } from "@sveltejs/kit";
import { zod } from "sveltekit-superforms/adapters";
import { message, setError, superValidate } from "sveltekit-superforms";
import { deleteSchema, ticketSchema } from "$lib/schemas/app";
import ActionResultModals from "$lib/enums/ActionResultModals";
import Roles from "$lib/enums/Roles";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({ url, locals: { supabase } }) => {
  const { data: violations } = await supabase
    .from("violations")
    .select()
    .is("deleted_by", null);
  const { data: vehicleTypes } = await supabase
    .from("vehicle_types")
    .select()
    .is("deleted_by", null);
  const { data: enforcers } = await supabase
    .from("employees")
    .select()
    .is("deleted_by", null)
    .eq("role", Roles.ENFORCER);
  const id = url.searchParams.get("id");
  const { data: oldTicket } = await supabase
    .from('tickets')
    .select().eq("id", id).single();
  const enforcer = enforcers?.find(enforcer => enforcer.id === oldTicket.enforcer);
  const vehicleType = vehicleTypes?.find(vehicleType => vehicleType.id === oldTicket.vehicle_type)
  const form = await superValidate({
    ...oldTicket!,
    enforcer: `${enforcer.first_name} ${enforcer.last_name}:${enforcer.id}`,
    violation_date: new Date(oldTicket!.violation_date),
    ticket_no: oldTicket!.ticket_no,
    violations: oldTicket!.violations,
    status: oldTicket!.status,
    vehicle_type: `${vehicleType.type}:${vehicleType.id}`,
  }, zod(ticketSchema));
  const cancelForm = await superValidate(zod(deleteSchema));
  const undoCancelForm = await superValidate(zod(deleteSchema));

  return {
    form,
    violations,
    vehicleTypes,
    enforcers,
    cancelForm,
    undoCancelForm,
  };
};

export const actions: Actions = {
  update: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const form = await superValidate(request, zod(ticketSchema));
    const failMessage = message(form, {
      success: false,
      action: ActionResultModals.FailUpdate,
    });

    if (!form.valid) {
      return message(form, {
        success: false,
        action: "",
      });
    }

    const { data: ticket_numbers } = await supabase
      .from("tickets")
      .select()
      .eq("ticket_no", form.data.ticket_no);

    if (!ticket_numbers) {
      return failMessage;
    }

    if (ticket_numbers.length && ticket_numbers[0].ticket_no != form.data.ticket_no) {
      return setError(form, "ticket_no", "Ticket Number already exists");
    }

    const formData = form.data;
    const currentUser = await getCurrentUser();
    const ticket = {
      violator: formData.violator,
      address: formData.address ?? "",
      status: "unpaid",
      violation_date: formData.violation_date,
      vehicle_type: Number(formData.vehicle_type!.split(":")[1]),
      enforcer: Number(formData.enforcer!.split(":")[1]),
      violation_location: formData.violation_location ?? "",
      updated_at: new Date(),
      updated_by: currentUser?.id,
      offense: formData.offense,
      previous_offense: formData.previous_offense,
      due_date: new Date(formData.violation_date.setDate(formData.violation_date.getDate() + 7)),
      violations: formData.violations,
      plate_no: formData.plate_no,
      license_no: formData.license_no,
      engine_no: formData.engine_no,
      chassis_no: formData.chassis_no,
      ticket_no: formData.ticket_no,
    }

    const { data: ticketData, error: ticketError } = await supabase
      .from("tickets")
      .update(ticket)
      .eq("id", form.data.id);

    if (ticketError) {
      return failMessage;
    }

    return redirect(302, '/tickets');
  },

  cancel: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const form = await superValidate(request, zod(deleteSchema));
    const user = await getCurrentUser();

    const { error } = await supabase.from("tickets").update({
      status: "cancelled",
      updated_at: new Date(),
      updated_by: user!.id,
    }).eq("id", form.data.id);

    if (error) {
      return message(
        form, {
        action: ActionResultModals.FailUpdate,
        success: false,
      }
      );
    }

    return redirect(302, "/tickets");
  },

  undocancel: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const form = await superValidate(request, zod(deleteSchema));
    const user = await getCurrentUser();
    const ticket = await supabase.from("tickets").select().eq("id", form.data.id);
    const status = new Date(ticket.data![0].due_date) < new Date() ? "overdue" : "unpaid";

    const { error } = await supabase.from("tickets").update({
      status: status,
      updated_at: new Date(),
      updated_by: user!.id,
    }).eq("id", form.data.id);

    if (error) {
      return message(
        form, {
        action: ActionResultModals.FailUpdate,
        success: false,
      }
      );
    }

    return redirect(302, "/tickets");
  }
};
