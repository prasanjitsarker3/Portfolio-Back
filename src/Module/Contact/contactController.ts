import { Request, Response } from "express";
import catchAsync from "../../UtlitisFunc/catchAsync";
import { contactService } from "./contactService";
import sendResponse from "../../UtlitisFunc/sendResponse";

const createContact = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await contactService.createContact(data);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Message Send successfully !",
    data: result,
  });
});
const getContact = catchAsync(async (req: Request, res: Response) => {
  const result = await contactService.getContact();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Message Fetch successfully !",
    data: result,
  });
});

export const contactController = {
  createContact,
  getContact,
};
