// See https://kit.svelte.dev/docs/types#app

import type EmployeeStatus from "$lib/enums/UserStatus";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { User } from "@supabase/supabase-js";
import type { SuperValidated } from "sveltekit-superforms";

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
      getCurrentUser(): Promise<Types.Employees | null>;
    }

    interface PageData {
      session: Session | null;
    }

    interface DeleteData extends PageData {
      deleteForm: SuperValidated;
    }

    interface Eq {
      operator: string;
      value: any;
    }

    namespace Superforms {
      type Message = {
        success: boolean, action: string
      }
    }
  }

  namespace Types {
    interface Data {
      id: string;
    }

    interface Violation extends Data {
      name: string;
      created_at: string | Date;
      updated_at: string | Date;
      deleted_at: string | Date | null;
      created_by: string;
      updated_by: string;
      deleted_by: string | null;
    }

    interface VehicleTypes extends Data {
      type: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
      created_by: number;
      updated_by: number;
      deleted_by: number | null;
    }

    interface Employees extends Data {
      first_name: string;
      last_name: string;
      status: string;
      user_id: string;
      role: number;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
      created_by: number;
      updated_by: number;
      deleted_by: number | null;
    }

    interface Ticket extends Data {
      violator: string;
      status: string;
      violation_date: string;
      vehicle_type: number;
      enforcer: number;
      violation_location: string;
      previous_offense: number | null;
      offense: number;
      due_date: string;
      plate_no: string;
      license_no: string;
      engine_no: string;
      chassis_no: string;
      ticket_no: string;
      violations: number[];
      or_number: string | null;
      discounted_by: string | null;
      amount_paid: number | null;
      paid_at: string | null;
      created_at: string;
      created_by: number;
      updated_at: string;
      updated_by: number;
      deleted_at: string | null;
      deleted_by: number | null;
    }

    interface Quarter {
      total_tickets: number;
      total_tickets_paid: number;
      total_fine: number;
      total_amount_paid: number;
      incentive: number;
    }
    interface QuarterlyIncentive extends Data {
      first_name: string;
      last_name: string;
      quarter_1: Quarter;
      quarter_2: Quarter;
      quarter_3: Quarter;
      quarter_4: Quarter;
    }
  }
}

export { };
