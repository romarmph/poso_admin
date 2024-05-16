
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

COMMENT ON SCHEMA "public" IS 'standard public schema';

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE TYPE "public"."EmployeeStatus" AS ENUM (
    'active',
    'terminated',
    'suspended',
    'onLeave',
    'onDuty'
);

ALTER TYPE "public"."EmployeeStatus" OWNER TO "postgres";

CREATE TYPE "public"."TicketStatus" AS ENUM (
    'unpaid',
    'paid',
    'cancelled',
    'transferred',
    'overdue'
);

ALTER TYPE "public"."TicketStatus" OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."get_incentives_by_quarter"("year" integer) RETURNS TABLE("id" bigint, "first_name" character varying, "last_name" character varying, "quarter_1" "json", "quarter_2" "json", "quarter_3" "json", "quarter_4" "json")
    LANGUAGE "plpgsql"
    AS $$
BEGIN
    RETURN QUERY 
    SELECT 
        e.id, 
        e.first_name, 
        e.last_name, 
        (SELECT json_build_object(
            'total_tickets', (SELECT COUNT(*) FROM tickets WHERE enforcer = e.id AND EXTRACT(YEAR FROM created_at) = year AND EXTRACT(MONTH FROM created_at) BETWEEN 1 AND 3),
            'total_paid_tickets',(SELECT COUNT(*) FROM public.tickets t JOIN public.ticket_payment tp ON t.id = tp.ticket_id WHERE t.enforcer = e.id AND EXTRACT(YEAR FROM tp.paid_at) = year AND EXTRACT(MONTH FROM tp.paid_at) BETWEEN 1 AND 3),
            'total_fine', COALESCE(SUM(t.fine), 0),
            'total_amount_paid', COALESCE(SUM(tp.amount_paid),0),
            'incentive', COALESCE(SUM(t.fine) * 0.2, 0)
        ) FROM public.tickets t JOIN public.ticket_payment tp ON t.id = tp.ticket_id
        WHERE t.enforcer = e.id AND EXTRACT(YEAR FROM tp.paid_at) = year AND EXTRACT(MONTH FROM tp.paid_at) BETWEEN 1 AND 3) AS quarter_1,
        (SELECT json_build_object(
            'total_tickets', (SELECT COUNT(*) FROM tickets WHERE enforcer = e.id AND EXTRACT(YEAR FROM created_at) = year AND EXTRACT(MONTH FROM created_at) BETWEEN 4 AND 6),
            'total_paid_tickets',(SELECT COUNT(*) FROM public.tickets t JOIN public.ticket_payment tp ON t.id = tp.ticket_id WHERE t.enforcer = e.id AND EXTRACT(YEAR FROM tp.paid_at) = year AND EXTRACT(MONTH FROM tp.paid_at) BETWEEN 4 AND 6),
            'total_fine', COALESCE(SUM(t.fine), 0),
            'total_amount_paid', COALESCE(SUM(tp.amount_paid),0),
            'incentive', COALESCE(SUM(t.fine) * 0.2, 0)
        ) FROM public.tickets t JOIN public.ticket_payment tp ON t.id = tp.ticket_id
        WHERE t.enforcer = e.id AND EXTRACT(YEAR FROM tp.paid_at) = year AND EXTRACT(MONTH FROM tp.paid_at) BETWEEN 4 AND 6) AS quarter_2,
        (SELECT json_build_object(
            'total_tickets', (SELECT COUNT(*) FROM tickets WHERE enforcer = e.id AND EXTRACT(YEAR FROM created_at) = year AND EXTRACT(MONTH FROM created_at) BETWEEN 7 AND 9),
            'total_paid_tickets',(SELECT COUNT(*) FROM public.tickets t JOIN public.ticket_payment tp ON t.id = tp.ticket_id WHERE t.enforcer = e.id AND EXTRACT(YEAR FROM tp.paid_at) = year AND EXTRACT(MONTH FROM tp.paid_at) BETWEEN 7 AND 9),
             'total_fine', COALESCE(SUM(t.fine), 0),
            'total_amount_paid', COALESCE(SUM(tp.amount_paid),0),
            'incentive', COALESCE(SUM(t.fine) * 0.2, 0)
        ) FROM public.tickets t JOIN public.ticket_payment tp ON t.id = tp.ticket_id
        WHERE t.enforcer = e.id AND EXTRACT(YEAR FROM tp.paid_at) = year AND EXTRACT(MONTH FROM tp.paid_at) BETWEEN 7 AND 9) AS quarter_3,
        (SELECT json_build_object(
            'total_tickets', (SELECT COUNT(*) FROM tickets WHERE enforcer = e.id AND EXTRACT(YEAR FROM created_at) = year AND EXTRACT(MONTH FROM created_at) BETWEEN 10 AND 12),
            'total_paid_tickets',(SELECT COUNT(*) FROM public.tickets t JOIN public.ticket_payment tp ON t.id = tp.ticket_id WHERE t.enforcer = e.id AND EXTRACT(YEAR FROM tp.paid_at) = year AND EXTRACT(MONTH FROM tp.paid_at) BETWEEN 10 AND 12),
             'total_fine', COALESCE(SUM(t.fine), 0),
            'total_amount_paid', COALESCE(SUM(tp.amount_paid),0),
            'incentive', COALESCE(SUM(t.fine) * 0.2, 0)
        ) FROM public.tickets t JOIN public.ticket_payment tp ON t.id = tp.ticket_id
        WHERE t.enforcer = e.id AND EXTRACT(YEAR FROM tp.paid_at) = year AND EXTRACT(MONTH FROM tp.paid_at) BETWEEN 10 AND 12) AS quarter_4
    FROM 
        public.employees e
    WHERE 
        e.role = 3
    GROUP BY 
        e.id, e.first_name, e.last_name;
END;
$$;

ALTER FUNCTION "public"."get_incentives_by_quarter"("year" integer) OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."employees" (
    "id" bigint NOT NULL,
    "first_name" character varying NOT NULL,
    "last_name" character varying NOT NULL,
    "status" "public"."EmployeeStatus" DEFAULT 'active'::"public"."EmployeeStatus" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "deleted_at" timestamp without time zone,
    "created_by" bigint,
    "updated_by" bigint,
    "deleted_by" bigint,
    "role" smallint DEFAULT '1'::smallint,
    "user_id" "uuid"
);

ALTER TABLE "public"."employees" OWNER TO "postgres";

ALTER TABLE "public"."employees" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."employees_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."roles" (
    "id" bigint NOT NULL,
    "role" character varying NOT NULL
);

ALTER TABLE "public"."roles" OWNER TO "postgres";

ALTER TABLE "public"."roles" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."roles_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."tickets" (
    "id" bigint NOT NULL,
    "violator" character varying,
    "status" "public"."TicketStatus" DEFAULT 'unpaid'::"public"."TicketStatus" NOT NULL,
    "violation_date" "date" NOT NULL,
    "vehicle_type" bigint NOT NULL,
    "created_at" timestamp without time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp without time zone DEFAULT "now"() NOT NULL,
    "deleted_at" timestamp without time zone,
    "created_by" bigint NOT NULL,
    "updated_by" bigint NOT NULL,
    "deleted_by" bigint,
    "enforcer" bigint DEFAULT '1'::bigint,
    "violation_location" character varying,
    "previous_offense" bigint,
    "offense" smallint,
    "due_date" timestamp without time zone,
    "plate_no" character varying,
    "license_no" character varying,
    "engine_no" character varying,
    "chassis_no" character varying,
    "ticket_no" character varying,
    "violations" bigint[],
    "or_number" character varying,
    "discounted_by" character varying,
    "amount_paid" bigint,
    "paid_at" timestamp without time zone,
    "address" character varying DEFAULT ''::character varying NOT NULL
);

ALTER TABLE "public"."tickets" OWNER TO "postgres";

ALTER TABLE "public"."tickets" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."tickets_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."vehicle_types" (
    "id" bigint NOT NULL,
    "type" character varying NOT NULL,
    "created_at" timestamp without time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp without time zone DEFAULT "now"() NOT NULL,
    "deleted_at" timestamp without time zone,
    "created_by" bigint,
    "updated_by" bigint,
    "deleted_by" bigint
);

ALTER TABLE "public"."vehicle_types" OWNER TO "postgres";

ALTER TABLE "public"."vehicle_types" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."vehicle_types_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."violations" (
    "id" bigint NOT NULL,
    "name" character varying NOT NULL,
    "created_at" timestamp without time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp without time zone DEFAULT "now"() NOT NULL,
    "deleted_at" timestamp without time zone,
    "created_by" bigint NOT NULL,
    "updated_by" bigint NOT NULL,
    "deleted_by" bigint
);

ALTER TABLE "public"."violations" OWNER TO "postgres";

ALTER TABLE "public"."violations" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."violations_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

ALTER TABLE ONLY "public"."employees"
    ADD CONSTRAINT "Employees_id_key" UNIQUE ("id");

ALTER TABLE ONLY "public"."employees"
    ADD CONSTRAINT "Employees_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."tickets"
    ADD CONSTRAINT "Tickets_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."roles"
    ADD CONSTRAINT "roles_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."vehicle_types"
    ADD CONSTRAINT "vehicle_types_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."violations"
    ADD CONSTRAINT "violations_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."employees"
    ADD CONSTRAINT "public_employees_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."employees"("id");

ALTER TABLE ONLY "public"."employees"
    ADD CONSTRAINT "public_employees_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."employees"("id");

ALTER TABLE ONLY "public"."employees"
    ADD CONSTRAINT "public_employees_role_fkey" FOREIGN KEY ("role") REFERENCES "public"."roles"("id");

ALTER TABLE ONLY "public"."employees"
    ADD CONSTRAINT "public_employees_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."employees"("id");

ALTER TABLE ONLY "public"."employees"
    ADD CONSTRAINT "public_employees_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id");

ALTER TABLE ONLY "public"."tickets"
    ADD CONSTRAINT "public_tickets_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."employees"("id");

ALTER TABLE ONLY "public"."tickets"
    ADD CONSTRAINT "public_tickets_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."employees"("id");

ALTER TABLE ONLY "public"."tickets"
    ADD CONSTRAINT "public_tickets_enforcer_id_fkey" FOREIGN KEY ("enforcer") REFERENCES "public"."employees"("id");

ALTER TABLE ONLY "public"."tickets"
    ADD CONSTRAINT "public_tickets_previous_offense_fkey" FOREIGN KEY ("previous_offense") REFERENCES "public"."tickets"("id");

ALTER TABLE ONLY "public"."tickets"
    ADD CONSTRAINT "public_tickets_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."employees"("id");

ALTER TABLE ONLY "public"."vehicle_types"
    ADD CONSTRAINT "public_vehicle_types_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."employees"("id");

ALTER TABLE ONLY "public"."vehicle_types"
    ADD CONSTRAINT "public_vehicle_types_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."employees"("id");

ALTER TABLE ONLY "public"."vehicle_types"
    ADD CONSTRAINT "public_vehicle_types_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."employees"("id");

ALTER TABLE ONLY "public"."violations"
    ADD CONSTRAINT "public_violations_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."employees"("id");

ALTER TABLE ONLY "public"."violations"
    ADD CONSTRAINT "public_violations_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."employees"("id");

ALTER TABLE ONLY "public"."violations"
    ADD CONSTRAINT "public_violations_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."employees"("id");

ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON FUNCTION "public"."get_incentives_by_quarter"("year" integer) TO "anon";
GRANT ALL ON FUNCTION "public"."get_incentives_by_quarter"("year" integer) TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_incentives_by_quarter"("year" integer) TO "service_role";

GRANT ALL ON TABLE "public"."employees" TO "anon";
GRANT ALL ON TABLE "public"."employees" TO "authenticated";
GRANT ALL ON TABLE "public"."employees" TO "service_role";

GRANT ALL ON SEQUENCE "public"."employees_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."employees_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."employees_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."roles" TO "anon";
GRANT ALL ON TABLE "public"."roles" TO "authenticated";
GRANT ALL ON TABLE "public"."roles" TO "service_role";

GRANT ALL ON SEQUENCE "public"."roles_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."roles_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."roles_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."tickets" TO "anon";
GRANT ALL ON TABLE "public"."tickets" TO "authenticated";
GRANT ALL ON TABLE "public"."tickets" TO "service_role";

GRANT ALL ON SEQUENCE "public"."tickets_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."tickets_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."tickets_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."vehicle_types" TO "anon";
GRANT ALL ON TABLE "public"."vehicle_types" TO "authenticated";
GRANT ALL ON TABLE "public"."vehicle_types" TO "service_role";

GRANT ALL ON SEQUENCE "public"."vehicle_types_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."vehicle_types_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."vehicle_types_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."violations" TO "anon";
GRANT ALL ON TABLE "public"."violations" TO "authenticated";
GRANT ALL ON TABLE "public"."violations" TO "service_role";

GRANT ALL ON SEQUENCE "public"."violations_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."violations_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."violations_id_seq" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
