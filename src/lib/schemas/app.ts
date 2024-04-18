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
