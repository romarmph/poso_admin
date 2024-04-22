import { z } from "zod";

export const deleteSchema = z.object({
	id: z.number().or(z.string())
});

export const violationSchema = z.object({
	id: z.number().optional(),
	name: z.string(),
	big: z.object({
		a: z.number().min(0, { message: "Fine can't be less than zero" }).max(10000, { message: "Fine can't be more than 10,000" }).default(0),
		b: z.number().min(0, { message: "Fine can't be less than zero" }).max(10000, { message: "Fine can't be more than 10,000" }).default(0),
		c: z.number().min(0, { message: "Fine can't be less than zero" }).max(10000, { message: "Fine can't be more than 10,000" }).default(0),
	}),
	small: z.object({
		a: z.number().min(0, { message: "Fine can't be less than zero" }).max(10000, { message: "Fine can't be more than 10,000" }).default(0),
		b: z.number().min(0, { message: "Fine can't be less than zero" }).max(10000, { message: "Fine can't be more than 10,000" }).default(0),
		c: z.number().min(0, { message: "Fine can't be less than zero" }).max(10000, { message: "Fine can't be more than 10,000" }).default(0),
	})
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
	id: z.number().optional(),
	first_name: z.string(),
	middle_name: z.string(),
	last_name: z.string(),
	suffix: z.string(),
	birthdate: z.date(),
	employee_no: z.number(),
})
