import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({
  locals: { supabase, getSession },
}) => {
  const trafficPost = await supabase.from("traffic_posts").select();

  return {
    trafficPost: trafficPost.data,
  };
};