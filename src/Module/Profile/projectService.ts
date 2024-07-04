/* eslint-disable @typescript-eslint/no-explicit-any */
import { Profile, TProfile } from "./profileInterface";

const createProfile = async (payload: TProfile) => {
  const result = await Profile.create(payload);
  return result;
};
const getProfile = async () => {
  const result = await Profile.find();
  return result;
};

const updateProfile = async (id: string, payload: any) => {
  const result = await Profile.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteProfile = async (id: string) => {
  const result = await Profile.findByIdAndDelete({ _id: id });
  return result;
};

export const profileService = {
  createProfile,
  getProfile,
  updateProfile,
  deleteProfile,
};
