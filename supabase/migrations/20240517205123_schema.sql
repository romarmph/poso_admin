alter table "public"."tickets" add column "discounted" boolean default false;

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_employee_stats(year integer, quarter integer)
 RETURNS TABLE(id bigint, first_name character varying, last_name character varying, total_tickets bigint, total_paid_tickets bigint, total_amount_paid numeric, incentive numeric)
 LANGUAGE plpgsql
AS $function$
DECLARE
    month_start integer;
    month_end integer;
BEGIN
    -- Determine the start and end months based on the quarter
    IF quarter = 1 THEN
        month_start := 1;
        month_end := 3;
    ELSIF quarter = 2 THEN
        month_start := 4;
        month_end := 6;
    ELSIF quarter = 3 THEN
        month_start := 7;
        month_end := 9;
    ELSIF quarter = 4 THEN
        month_start := 10;
        month_end := 12;
    ELSE
        RAISE EXCEPTION 'Invalid quarter: %', quarter;
    END IF;

    RETURN QUERY 
    SELECT 
      e.id, 
      e.first_name, 
      e.last_name, 
      (SELECT COUNT(*) FROM tickets WHERE enforcer = e.id AND EXTRACT(YEAR FROM violation_date) = year AND EXTRACT(MONTH FROM violation_date) BETWEEN month_start AND month_end) as total_tickets,
      (SELECT COUNT(*) FROM tickets WHERE enforcer = e.id AND EXTRACT(YEAR FROM violation_date) = year AND EXTRACT(MONTH FROM violation_date) BETWEEN month_start AND month_end AND status = 'paid') as total_paid_tickets,
      COALESCE((SELECT SUM(amount_paid)::numeric FROM tickets WHERE enforcer = e.id AND EXTRACT(YEAR FROM paid_at) = year AND EXTRACT(MONTH FROM paid_at) BETWEEN month_start AND month_end AND status = 'paid'),0::numeric) as total_amount_paid,
      COALESCE((SELECT SUM(amount_paid) * 0.2::numeric FROM tickets WHERE enforcer = e.id AND EXTRACT(YEAR FROM paid_at) = year AND EXTRACT(MONTH FROM paid_at) BETWEEN month_start AND month_end AND status = 'paid'), 0::numeric) as incentive
    FROM 
        public.employees e
    WHERE 
        e.role = 3 AND e.status = 'active'
    GROUP BY 
        e.id, e.first_name, e.last_name;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_unique_years(table_name text, column_name text)
 RETURNS TABLE(year integer)
 LANGUAGE plpgsql
AS $function$
DECLARE
    query text;
BEGIN
    query := format('SELECT DISTINCT EXTRACT(YEAR FROM %I)::integer FROM %I ORDER BY 1', column_name, table_name);
    RETURN QUERY EXECUTE query;
END;
$function$
;



