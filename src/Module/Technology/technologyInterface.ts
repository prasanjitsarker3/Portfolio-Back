import { Schema, model } from "mongoose";

export type TTech = {
  name: string;
  level: string;
  icon: string;
};

export const techSchema = new Schema<TTech>({
  name: {
    type: String,
    required: [true, "Name is required!"],
  },
  level: {
    type: String,
    required: [true, "Level is required"],
  },
  icon: {
    type: String,
    required: [true, "Icon is required"],
  },
});

export const Tech = model<TTech>("Tech", techSchema);

import z from "zod";

export const techValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    level: z.string(),
    icon: z.string(),
  }),
});
