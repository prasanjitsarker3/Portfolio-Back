import { Request, Response } from "express";
import catchAsync from "../../UtlitisFunc/catchAsync";
import { projectService } from "./projectService";
import sendResponse from "../../UtlitisFunc/sendResponse";

const createProject = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await projectService.createProject(data);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Project Create successfully !",
    data: result,
  });
});
const allProject = catchAsync(async (req: Request, res: Response) => {
  const result = await projectService.getAllProject();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project Fetch successfully !",
    data: result,
  });
});
const singleProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await projectService.getSingleProject(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project Fetch successfully !",
    data: result,
  });
});

const updatedProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await projectService.updateProject(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project Update successfully !",
    data: result,
  });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await projectService.deleteProject(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project Delete successfully !",
    data: result,
  });
});
export const projectController = {
  createProject,
  allProject,
  singleProject,
  updatedProject,
  deleteProject,
};
