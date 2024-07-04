import { Blog, TBlog } from "./blogInterface";

const createBlog = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};
const getBlog = async () => {
  const result = await Blog.find();
  return result;
};
const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete({ _id: id });
  return result;
};

export const blogServices = {
  createBlog,
  deleteBlog,
  getBlog,
};
