/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProject } from "./projectInterface";
import Project from "./projectMode";

const createProject = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const getAllProject = async () => {
  const result = await Project.find();
  return result;
};

const getSingleProject = async (id: string) => {
  const result = await Project.findById({ _id: id });
  return result;
};

const updateProject = async (id: string, payload: any) => {
  const result = await Project.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteProject = async (id: string) => {
  const result = await Project.findByIdAndDelete({ _id: id });
  return result;
};

export const projectService = {
  createProject,
  getAllProject,
  getSingleProject,
  updateProject,
  deleteProject,
};
