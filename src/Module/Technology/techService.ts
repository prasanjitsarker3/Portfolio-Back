/* eslint-disable @typescript-eslint/no-explicit-any */
import { TTech, Tech } from "./technologyInterface";

const createTech = async (payload: TTech) => {
  const result = await Tech.create(payload);
  return result;
};

const getTech = async () => {
  const result = await Tech.find();
  return result;
};
const updateTech = async (id: string, payload: any) => {
  const result = await Tech.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteTech = async (id: string) => {
  const result = await Tech.findOneAndDelete({ _id: id });
  return result;
};

export const techService = {
  createTech,
  getTech,
  updateTech,
  deleteTech,
};
