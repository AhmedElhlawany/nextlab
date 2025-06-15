import { z } from "zod";

export const validationSchema=z.object({
    title:z.string().min(2).max(20),
    status:z.optional(z.enum(["todo", "in progress", "completed"]))
})