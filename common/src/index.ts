import z from "zod"

export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})


export const createdBlogInput = z.object({
    title: z.string(),
    content: z.string()
})

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

export type signupInput = z.infer<typeof  signupInput>
export type signinInput = z.infer<typeof  signinInput>
export type CreatedBlogInput = z.infer<typeof createdBlogInput>
export type updateBlogInput = z.infer<typeof updateBlogInput>