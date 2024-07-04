import { Request, Response } from "express";
import catchAsync from "../../UtlitisFunc/catchAsync";
import { blogServices } from "./blogServices";
import sendResponse from "../../UtlitisFunc/sendResponse";

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await blogServices.createBlog(data);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Blog create successfully !",
    data: result,
  });
});
const getBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await blogServices.getBlog();

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Blog Fetch successfully !",
    data: result,
  });
});
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await blogServices.deleteBlog(id);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Blog Delete successfully !",
    data: result,
  });
});

export const blogController = {
  createBlog,
  deleteBlog,
  getBlog,
};
