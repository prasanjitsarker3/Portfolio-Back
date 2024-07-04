import { TProject } from "./projectInterface";
import { Schema, model } from "mongoose";

// Define the project schema
const projectSchema = new Schema<TProject>({
  name: {
    type: String,
    required: [true, "Name is required!"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  allImage: {
    type: [String],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  clientCode: {
    type: String,
  },
  serverCode: {
    type: String,
  },
  postmanDocument: {
    type: String,
  },
  live: {
    type: String,
    required: [true, "Live URL is required"],
  },
  details: {
    type: String,
    required: [true, "Details are required"],
  },
  technologies: {
    type: [String],
    required: [true, "Technologies are required"],
  },
});

// Create the model
const Project = model<TProject>("Project", projectSchema);

export default Project;
