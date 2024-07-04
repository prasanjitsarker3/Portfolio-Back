import { Schema, model } from "mongoose";

export type TBlog = {
  title: string;
  heading: string;
  image: string;
  link: string;
  details: string;
};

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
    },
    heading: {
      type: String,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
    details: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = model<TBlog>("Blog", blogSchema);
