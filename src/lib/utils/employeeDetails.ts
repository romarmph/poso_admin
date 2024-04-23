import type { SupabaseClient } from "@supabase/supabase-js";

export async function getEmployeeDetails(id: number | string, supabase: SupabaseClient): Promise<Types.Employees> {
    const { data, error } = await supabase
        .from("employees")
        .select()
        .eq("id", id);
    if (error) {
        throw "Error fetching user";
    }
    return data[0] as Types.Employees;
}


export async function getEmployeeAccount(uid: string) {
    const response = await fetch("api/enforcer/account", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_id: uid,
        }),
    });

    const raw = new TextDecoder().decode(await response.arrayBuffer());
    const body = JSON.parse(raw);
    return body.user;
}
