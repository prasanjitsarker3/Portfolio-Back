import { Schema, model } from "mongoose";

export type TProfile = {
  name: string;
  email: string;
  about: string;
  experience: number;
  projects: number;
  technologies: number;
  commit: number;
};

const profileSchema = new Schema<TProfile>({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  about: {
    type: String,
  },
  experience: {
    type: Number,
  },
  projects: {
    type: Number,
  },
  technologies: {
    type: Number,
  },
  commit: {
    type: Number,
  },
});

export const Profile = model<TProfile>("Profile", profileSchema);
