import type { SupabaseClient } from "@supabase/supabase-js";

export default async function fetchUser(id: number, supabase:SupabaseClient): Promise<Types.User> {
    const { data, error } = await supabase
        .from("employees")
        .select()
        .eq("id", id);
    if (error) {
        throw "Error fetching user";
    }
    return data[0] as Types.User;
}