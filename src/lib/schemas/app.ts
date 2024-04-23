import { z } from "zod";

export const deleteSchema = z.object({
	id: z.number().or(z.string())
});

const fineSchema = z.number().min(0, { message: "Fine can't be less than zero" }).max(10000, { message: "Fine can't be more than 10,000" }).default(0);
export const violationSchema = z.object({
	id: z.number().optional(),
	name: z.string(),
	big: z.object({
		a: fineSchema,
		b: fineSchema,
		c: fineSchema,
	}),
	small: z.object({
		a: fineSchema,
		b: fineSchema,
		c: fineSchema,
	}),
	enabled: z.boolean().default(true),
})

export const vehicleTypesSchema = z.object({
	id: z.number().optional(),
	type: z.string(),
	big_vehicle: z.boolean().default(true),
})

export const trafficPostSchema = z.object({
	id: z.number().optional(),
	name: z.string(),
	address: z.string(),
})

export const employeeSchema = z.object({
	id: z.string().optional(),
	email: z.string().email(),
	password: z.string().min(8).max(16),
	first_name: z.string().min(1, "First name is too short"),
	middle_name: z.string().optional(),
	last_name: z.string().min(1, "Last name is too short"),
	suffix: z.string().optional(),
	birthdate: z.date(),
	employee_no: z.number(),
	status: z.string().default("active").optional(),
	user_id: z.string().optional(),
})
