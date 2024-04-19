import { z } from "zod";
import { violationSchema } from "./app";

export const dbViolationSchema = z.object({
	name: z.string(),
	fine: z.object({
		big: z.object({
			a: z.number(),
			b: z.number(),
			c: z.number(),
		}),
		small: z.object({
			a: z.number(),
			b: z.number(),
			c: z.number(),
		})
	}),
	enabled: z.boolean().default(true),
	created_at: z.date(),
	updated_at: z.date(),
	deleted_at: z.date().nullable(),
	created_by: z.number(),
	updated_by: z.number(),
	deleted_by: z.number().nullable(),
})
