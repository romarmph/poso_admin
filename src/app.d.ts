// See https://kit.svelte.dev/docs/types#app

import type { User } from "@supabase/supabase-js";

// for information about these interfaces
declare global {
	namespace App {
    interface Locals {
      supabase: SupabaseClient<Database>
      getSession(): Promise<Session | null>
      user: User
    }
    interface PageData {
      session: Session | null
    }

		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare global

export {};
