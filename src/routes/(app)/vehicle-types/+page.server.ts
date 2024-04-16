import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({
  locals: { supabase, getSession },
}) => {
  const vehicleTypes = await supabase.from("vehicle_types").select();

  return {
    vehicleTypes: vehicleTypes.data,
  };
};