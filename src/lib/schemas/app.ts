import { z } from "zod";

export const violationSchema = z.object({
	name: z.string(),
	big: z.object({
		a: z.number().min(0, { message: "Fine can't be less than zero" }).max(10000, { message: "Fine can't be more than 10,000" }).default(0),
		b: z.number().min(0).max(10000).default(0),
		c: z.number().min(0).max(10000).default(0),
	}),
	small: z.object({
		a: z.number().min(0).max(10000).default(0),
		b: z.number().min(0).max(10000).default(0),
		c: z.number().min(0).max(10000).default(0),
	})
})
