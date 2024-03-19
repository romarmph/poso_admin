export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      _role_permissions: {
        Row: {
          permission_id: number
          role_id: number
        }
        Insert: {
          permission_id: number
          role_id: number
        }
        Update: {
          permission_id?: number
          role_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public__role_permissions_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public__role_permissions_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      _ticket_violations: {
        Row: {
          ticket_id: number
          violation_id: number
        }
        Insert: {
          ticket_id: number
          violation_id: number
        }
        Update: {
          ticket_id?: number
          violation_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public__ticket_violations_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public__ticket_violations_violation_id_fkey"
            columns: ["violation_id"]
            isOneToOne: false
            referencedRelation: "violations"
            referencedColumns: ["id"]
          },
        ]
      }
      employees: {
        Row: {
          birthdate: string
          created_at: string
          created_by: string
          deleted_at: string | null
          deleted_by: string | null
          employee_no: string
          first_name: string
          id: number
          last_name: string
          middle_name: string | null
          role: Json
          status: Database["public"]["Enums"]["EmployeeStatus"]
          suffix: string | null
          updated_at: string
          updated_by: string
          user_id: string
        }
        Insert: {
          birthdate: string
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          deleted_by?: string | null
          employee_no: string
          first_name: string
          id: number
          last_name: string
          middle_name?: string | null
          role: Json
          status?: Database["public"]["Enums"]["EmployeeStatus"]
          suffix?: string | null
          updated_at?: string
          updated_by?: string
          user_id: string
        }
        Update: {
          birthdate?: string
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          deleted_by?: string | null
          employee_no?: string
          first_name?: string
          id?: number
          last_name?: string
          middle_name?: string | null
          role?: Json
          status?: Database["public"]["Enums"]["EmployeeStatus"]
          suffix?: string | null
          updated_at?: string
          updated_by?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_Employees_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Employees_deleted_by_fkey"
            columns: ["deleted_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Employees_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Employees_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      impounds: {
        Row: {
          id: number
          impounted_at: string
          released_at: string | null
          released_by: string | null
          site: string
          ticket_id: number
        }
        Insert: {
          id?: number
          impounted_at: string
          released_at?: string | null
          released_by?: string | null
          site: string
          ticket_id: number
        }
        Update: {
          id?: number
          impounted_at?: string
          released_at?: string | null
          released_by?: string | null
          site?: string
          ticket_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_impounds_released_by_fkey"
            columns: ["released_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_impounds_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      permissions: {
        Row: {
          id: number
          permission: string
        }
        Insert: {
          id?: number
          permission: string
        }
        Update: {
          id?: number
          permission?: string
        }
        Relationships: []
      }
      roles: {
        Row: {
          id: number
          role: string
        }
        Insert: {
          id?: number
          role: string
        }
        Update: {
          id?: number
          role?: string
        }
        Relationships: []
      }
      ticket_issue_location: {
        Row: {
          address: string
          id: number
          latitude: number
          longitude: number
          ticket_id: number
        }
        Insert: {
          address: string
          id?: number
          latitude: number
          longitude: number
          ticket_id: number
        }
        Update: {
          address?: string
          id?: number
          latitude?: number
          longitude?: number
          ticket_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_ticket_issue_location_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_numbers_auto: {
        Row: {
          ticket_id: number
          ticket_number: number
        }
        Insert: {
          ticket_id: number
          ticket_number?: number
        }
        Update: {
          ticket_id?: number
          ticket_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_ticket_numbers_auto_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: true
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_numbers_manual: {
        Row: {
          ticket_id: number
          ticket_number: number
        }
        Insert: {
          ticket_id: number
          ticket_number: number
        }
        Update: {
          ticket_id?: number
          ticket_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_ticket_numbers_manual_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: true
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_payment: {
        Row: {
          cashier: string
          discount_amount: number
          discounted: boolean
          id: number
          or_number: string
          paid_amount: number
          paid_at: string
          ticket_id: number
          udpated_at: string
          updated_by: string
        }
        Insert: {
          cashier?: string
          discount_amount?: number
          discounted?: boolean
          id?: number
          or_number: string
          paid_amount?: number
          paid_at?: string
          ticket_id: number
          udpated_at?: string
          updated_by?: string
        }
        Update: {
          cashier?: string
          discount_amount?: number
          discounted?: boolean
          id?: number
          or_number?: string
          paid_amount?: number
          paid_at?: string
          ticket_id?: number
          udpated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_ticket_payment_cashier_fkey"
            columns: ["cashier"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_ticket_payment_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_ticket_payment_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      tickets: {
        Row: {
          birthdate: string | null
          created_at: string
          created_by: string
          deleted_at: string | null
          deleted_by: string | null
          enforcer_id: string
          first_name: string
          id: number
          last_name: string
          middle_name: string | null
          status: Database["public"]["Enums"]["TicketStatus"]
          suffix: string | null
          udpated_by: string
          updated_at: string
          vehicle_type_id: number
          violation_date: string
          violation_time: string
        }
        Insert: {
          birthdate?: string | null
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          deleted_by?: string | null
          enforcer_id: string
          first_name: string
          id?: number
          last_name: string
          middle_name?: string | null
          status?: Database["public"]["Enums"]["TicketStatus"]
          suffix?: string | null
          udpated_by?: string
          updated_at?: string
          vehicle_type_id: number
          violation_date: string
          violation_time: string
        }
        Update: {
          birthdate?: string | null
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          deleted_by?: string | null
          enforcer_id?: string
          first_name?: string
          id?: number
          last_name?: string
          middle_name?: string | null
          status?: Database["public"]["Enums"]["TicketStatus"]
          suffix?: string | null
          udpated_by?: string
          updated_at?: string
          vehicle_type_id?: number
          violation_date?: string
          violation_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_Tickets_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Tickets_deleted_by_fkey"
            columns: ["deleted_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Tickets_enforcer_id_fkey"
            columns: ["enforcer_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Tickets_udpated_by_fkey"
            columns: ["udpated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      traffic_posts: {
        Row: {
          address: string
          "created_at ": string
          created_by: string
          deleted_at: string | null
          deleted_by: string | null
          enabled: boolean
          id: number
          latitude: number
          longitude: number
          name: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          address: string
          "created_at "?: string
          created_by?: string
          deleted_at?: string | null
          deleted_by?: string | null
          enabled?: boolean
          id?: number
          latitude: number
          longitude: number
          name: string
          updated_at?: string
          updated_by?: string
        }
        Update: {
          address?: string
          "created_at "?: string
          created_by?: string
          deleted_at?: string | null
          deleted_by?: string | null
          enabled?: boolean
          id?: number
          latitude?: number
          longitude?: number
          name?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_traffic_posts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_traffic_posts_deleted_by_fkey"
            columns: ["deleted_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_traffic_posts_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicle_types: {
        Row: {
          big_vehicle: boolean
          created_at: string
          created_by: string
          deleted_at: string | null
          deleted_by: string | null
          hidden: boolean
          id: number
          type: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          big_vehicle?: boolean
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          deleted_by?: string | null
          hidden?: boolean
          id?: number
          type: string
          updated_at?: string
          updated_by?: string
        }
        Update: {
          big_vehicle?: boolean
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          deleted_by?: string | null
          hidden?: boolean
          id?: number
          type?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_vehicle_types_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_vehicle_types_deleted_by_fkey"
            columns: ["deleted_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_vehicle_types_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      violations: {
        Row: {
          created_at: string
          created_by: string
          deleted_at: string | null
          deleted_by: string | null
          enabled: boolean
          fine: Json
          id: number
          name: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          deleted_by?: string | null
          enabled?: boolean
          fine: Json
          id?: number
          name: string
          updated_at?: string
          updated_by?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          deleted_by?: string | null
          enabled?: boolean
          fine?: Json
          id?: number
          name?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_violations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_violations_deleted_by_fkey"
            columns: ["deleted_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_violations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      EmployeeStatus:
        | "active"
        | "terminated"
        | "suspended"
        | "onLeave"
        | "onDuty"
      TicketStatus: "unpaid" | "paid" | "cancelled" | "transferred" | "overdue"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
