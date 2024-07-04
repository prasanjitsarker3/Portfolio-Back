import { Schema, model } from "mongoose";

export type TContact = {
  name: string;
  email: string;
  message: string;
};

const profileSchema = new Schema<TContact>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
});

export const Contact = model<TContact>("Contact", profileSchema);
