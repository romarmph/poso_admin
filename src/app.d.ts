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
      created_at: string;
      created_by: number;
      updated_at: string;
      updated_by: number;
      deleted_at: string | null;
      deleted_by: number | null;
    }

    interface Admin extends Data {
      first_name: string;
      last_name: string;
      email: string;
      status: string;
      user_id: string;
      role: number;
    }

    interface Enforcer extends Data {
      first_name: string;
      last_name: string;
      status: EmployeeStatus;
    }

    interface Violation extends Data {
      name: string;
    }

    interface VehicleTypes extends Data {
      type: string;
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
      discounted: boolean | null;
      amount_paid: number | null;
      paid_at: string | null;
      overdue: boolean;
      alarmed: boolean;
    }

    interface Payment extends Data {
      or_number: string;
      amount_paid: number;
      paid_at: Date;
      discounted: boolean;
      discounted_by: string;
    }

    interface Quarter {
      total_tickets: number;
      total_tickets_paid: number;
      total_fine: number;
      total_amount_paid: number;
      incentive: number;
    }
    interface QuarterlyIncentive {
      first_name: string;
      last_name: string;
      quarter_1: Quarter;
      quarter_2: Quarter;
      quarter_3: Quarter;
      quarter_4: Quarter;
    }

    interface TicketsPerMonthByYear {
      enforcer_id: number;
      enforcer_name: string;
      january: number;
      february: number;
      march: number;
      april: number;
      may: number;
      june: number;
      july: number;
      august: number;
      september: number;
      october: number;
      november: number;
      december: number;
    }

    interface OverdueAndAlarmedIncentive {
      january: number;
      february: number;
      march: number;
      april: number;
      may: number;
      june: number;
      july: number;
      august: number;
      september: number;
      october: number;
      november: number;
      december: number;
    }
  }
}

export { };
