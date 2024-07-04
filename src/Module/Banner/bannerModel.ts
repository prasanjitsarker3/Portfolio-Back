import { Schema, model } from "mongoose";
import { TBanner } from "./bannerInterface";

export const bannerSchema = new Schema<TBanner>(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
    },
    name: {
      type: String,
      required: [true, "Name is required!"],
    },
    heading: {
      type: String,
      required: [true, "Heading is required!"],
    },
    resumeLink: {
      type: String,
      required: [true, "Link is required!"],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Banner = model<TBanner>("Banner", bannerSchema);
