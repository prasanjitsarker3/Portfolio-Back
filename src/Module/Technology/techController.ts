import { Request, Response } from "express";
import catchAsync from "../../UtlitisFunc/catchAsync";
import { techService } from "./techService";
import sendResponse from "../../UtlitisFunc/sendResponse";

const createTech = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await techService.createTech(data);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Tech Create successfully !",
    data: result,
  });
});
const getTech = catchAsync(async (req: Request, res: Response) => {
  const result = await techService.getTech();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Tech Fetch successfully !",
    data: result,
  });
});
const updateTech = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await techService.updateTech(id, req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Tech Update successfully !",
    data: result,
  });
});
const deleteTech = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await techService.deleteTech(id);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Tech Delete successfully !",
    data: result,
  });
});

export const techController = {
  createTech,
  getTech,
  updateTech,
  deleteTech,
};
