/* eslint-disable @typescript-eslint/no-explicit-any */
import { TBanner } from "./bannerInterface";
import { Banner } from "./bannerModel";

const createBanner = async (payload: TBanner) => {
  const result = await Banner.create(payload);
  return result;
};

const getBanner = async () => {
  const result = await Banner.find();
  return result;
};

const updateBanner = async (id: string, payload: any) => {
  const result = await Banner.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteBanner = async (id: string) => {
  const result = await Banner.findByIdAndDelete({ _id: id });
  return result;
};
export const bannerService = {
  createBanner,
  getBanner,
  updateBanner,
  deleteBanner,
};
