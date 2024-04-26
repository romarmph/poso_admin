alter table "public"."ticket_numbers_manual" drop constraint "public_ticket_numbers_manual_ticket_id_fkey";

alter table "public"."employees" alter column "created_by" drop not null;

alter table "public"."employees" alter column "updated_by" drop not null;

alter table "public"."tickets" add column "fine" integer not null default 0;

alter table "public"."ticket_payment" add constraint "public_ticket_payment_ticket_id_fkey" FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE RESTRICT not valid;

alter table "public"."ticket_payment" validate constraint "public_ticket_payment_ticket_id_fkey";

alter table "public"."ticket_violations" add constraint "public_ticket_violations_ticket_id_fkey" FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE not valid;

alter table "public"."ticket_violations" validate constraint "public_ticket_violations_ticket_id_fkey";

alter table "public"."ticket_violations" add constraint "public_ticket_violations_violation_id_fkey" FOREIGN KEY (violation_id) REFERENCES violations(id) not valid;

alter table "public"."ticket_violations" validate constraint "public_ticket_violations_violation_id_fkey";

alter table "public"."ticket_numbers_manual" add constraint "public_ticket_numbers_manual_ticket_id_fkey" FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE not valid;

alter table "public"."ticket_numbers_manual" validate constraint "public_ticket_numbers_manual_ticket_id_fkey";



