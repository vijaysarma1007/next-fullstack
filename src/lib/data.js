// const users = [
//   { id: 1, name: "john" },
//   { id: 2, name: "carter" },
// ];

import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_cache as noStore } from "next/cache";

// const posts = [{ id: 1, title: "post 1", body: "....", userId: 1 }];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch posts`);
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch the post with slug : ${slug}`);
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(` Failed to fetch the user with id : ${id}`);
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    // console.log("all users", users);
    return users;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch users`);
  }
};
