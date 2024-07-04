import { Request, Response } from "express";
import catchAsync from "../../UtlitisFunc/catchAsync";
import { profileService } from "./projectService";
import sendResponse from "../../UtlitisFunc/sendResponse";

const createProfile = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await profileService.createProfile(data);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Project Create successfully !",
    data: result,
  });
});
const getProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await profileService.getProfile();

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "ProjectFetcg successfully !",
    data: result,
  });
});
const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await profileService.updateProfile(id, req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "ProjectFetcg successfully !",
    data: result,
  });
});
const deleteProfile = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await profileService.deleteProfile(id);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "ProjectFetcg successfully !",
    data: result,
  });
});

export const profileController = {
  createProfile,
  getProfile,
  updateProfile,
  deleteProfile,
};
