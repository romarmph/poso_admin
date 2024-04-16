// See https://kit.svelte.dev/docs/types#app

import type { SupabaseClient } from "@supabase/supabase-js";
import type { User } from "@supabase/supabase-js";

// for information about these interfaces

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient<Database>;
      getSession(): Promise<Session | null>;
      user: User;
    }
    interface PageData {
      session: Session | null;
    }

    interface Eq {
      operator: string;
      value: any;
    }    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }



  namespace Types {
    interface Data {
      id: string;
    }

    interface Violation extends Data {
      name: string;
      fine: {
        big: {
          [key: string]: any,
        },
        small: {
          [key: string]: any,
        }
      };
      enabled: boolean;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
      created_by: string;
      updated_by: string;
      deleted_by: string | null;
    }

    interface Tickets extends Data {
      first_name: string;
      middle_name: string;
      last_name: string;
      suffix: string;
      birthdate: string;
      status: string;
      violation_date: string;
      violation_time: string;
      vehicle_type_id: number;
      enforcer_id: number;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
      created_by: number;
      updated_by: number;
      deleted_by: number | null;
    }

    interface VehicleTypes extends Data {
      type: string;
      big_vehicle: boolean;
      enabled: boolean;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
      created_by: number;
      updated_by: number;
      deleted_by: number | null;

    }
    interface TrafficPost extends Data {
      name: string;
      address: string;
      longitude: number;
      latitude: number;
      enabled: boolean;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
      created_by: number;
      updated_by: number;
      deleted_by: number | null;
    }
  }
}

export { };
