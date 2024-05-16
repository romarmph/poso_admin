import Roles from "$lib/enums/Roles";
import { z } from "zod";
export const deleteSchema = z.object({
	id: z.number().or(z.string())
});

const fineSchema = z.number().min(0, { message: "Fine can't be less than zero" }).max(10000, { message: "Fine can't be more than 10,000" }).default(0);
export const violationSchema = z.object({
	id: z.number().optional(),
	name: z.string(),
})

export const vehicleTypesSchema = z.object({
	id: z.number().optional(),
	type: z.string(),
})

export const enforcerSchema = z.object({
	id: z.string().optional(),
	first_name: z.string().min(1, "First name is too short"),
	last_name: z.string().min(1, "Last name is too short"),
	status: z.string().default("active").optional(),
})

export const adminSchema = enforcerSchema.extend({
	role: z.number().default(Roles.STAFF),
	email: z.string().email().optional(),
	password: z.string().min(8).optional(),
	user_id: z.string().optional(),
})

export const ticketSchema = z.object({
	id: z.number().optional(),
	violator: z.string().refine(val => val.length, "Violator is required"),
	status: z.string().default("unpaid"),
	violation_date: z.date().default(new Date()),
	vehicle_type: z.number().default(0).refine(val => val, "Vehicle type is required"),
	enforcer: z.number().optional(),
	address: z.string().optional(),
	violation_location: z.string().optional(),
	previous_offense: z.number().optional(),
	offense: z.number().default(1),
	plate_no: z.string().optional(),
	license_no: z.string().optional(),
	engine_no: z.string().optional(),
	chassis_no: z.string().optional(),
	ticket_no: z.string().refine(val => val.length, "Ticket number is required"),
	violations: z.array(z.number()).default([]).refine((val) => val.length, "Please select at least one violation"),
})

export const paymentSchema = z.object({
	id: z.number().optional(),
	or_number: z.string().refine(val => val.length, 'OR number is required'),
	amount_paid: z.number().default(0),
	paid_at: z.date().default(new Date()),
	discounted: z.boolean().default(false),
	discounted_by: z.string().default(""),
})
