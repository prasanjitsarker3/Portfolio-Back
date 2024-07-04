import z from "zod";

export const bannerValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    name: z.string(),
    heading: z.string(),
    resumeLink: z.string().optional(),
    image: z.string().optional(),
  }),
});
