import { z } from "zod";

export const violationSchema = z.object({
	name: z.string(),
	big_1: z.number().min(0).max(10000).default(0),
	big_2: z.number().min(0).max(10000).default(0),
	big_3: z.number().min(0).max(10000).default(0),
	small_1: z.number().min(0).max(10000).default(0),
	small_2: z.number().min(0).max(10000).default(0),
	small_3: z.number().min(0).max(10000).default(0),
})

export const vehicleTypesSchema = z.object({
	type: z.string(),
	big_vehicle: z.boolean().default(true),

})

export const trafficPostSchema = z.object({
	name: z.string(),
	address: z.string(),
})
export const employeeSchema = z.object({
	first_name: z.string(),
	middle_name:z.string(),
	last_name: z.string(),
	suffix: z.string(),
	birthdate: z.date(),
	employee_no: z.number(),
})