import { Request, Response } from "express";
import catchAsync from "../../UtlitisFunc/catchAsync";
import { bannerService } from "./bannerService";
import sendResponse from "../../UtlitisFunc/sendResponse";

const createBanner = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await bannerService.createBanner(data);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Banner Create successfully !",
    data: result,
  });
});
const getBanner = catchAsync(async (req: Request, res: Response) => {
  const result = await bannerService.getBanner();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Banner get successfully !",
    data: result,
  });
});
const updateBanner = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await bannerService.updateBanner(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Banner  update successfully !",
    data: result,
  });
});
const deleteBanner = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await bannerService.deleteBanner(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Banner  delete successfully !",
    data: result,
  });
});

export const bannerController = {
  createBanner,
  getBanner,
  updateBanner,
  deleteBanner,
};
