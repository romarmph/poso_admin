// See https://kit.svelte.dev/docs/types#app

import type EmployeeStatus from "$lib/enums/UserStatus";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { User } from "@supabase/supabase-js";
import type { SuperValidated } from "sveltekit-superforms";

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

    interface Account extends Data {
      id: string,
      email: string,
      phone: string,
      created_at: string,
      updated_at: string
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
      created_at: string | Date;
      updated_at: string | Date;
      deleted_at: string | Date | null;
      created_by: string;
      updated_by: string;
      deleted_by: string | null;
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

    interface Employees extends Data {
      first_name: string;
      middle_name: string;
      last_name: string;
      suffix: string;
      birthdate: string;
      status: string;
      employee_no: string;
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
      first_name: string;
      middle_name: string;
      last_name: string;
      suffix: string;
      birthdate: string;
      address: string;
      status: string;
      violation_date: string;
      violation_time: string;
      vehicle_type: number;
      enforcer: number;
      violation_location: string;
      identification_type: string;
      identification: string;
      created_at: string;
      created_by: number;
      updated_at: string;
      updated_by: number;
      deleted_at: string | null;
      deleted_by: number | null;
      offense: number;
      previous_offense: number;
      fine: number;
      due_date: string;
    }

    interface Payment extends Data {
      ticket_id: number;
      or_number: number;
      discounted: boolean;
      discount_amount: number;
      amount_paid: number;
      paid_at: string;
      cashier: number;
      created_at: string;
      created_by: number;
      updated_at: string;
      updated_by: number;
      deleted_at: string;
      deleted_by: number;
      tickets: Record<string, any>;
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
