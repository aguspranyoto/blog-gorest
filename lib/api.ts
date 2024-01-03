import { CommentType, Post, PostType } from "@/types";
import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get("https://gorest.co.in/public/v2/posts");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getSinglePost = async (id: number) => {
  try {
    const response = await axios.get(
      `https://gorest.co.in/public/v2/posts/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

export const postPost = async (data: Post) => {
  try {
    const response = await axios.post(
      "https://gorest.co.in/public/v2/posts",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error posting todo:", error);
    throw error;
  }
};

export const getRecentPost = async () => {
  try {
    const response = await axios.get("https://gorest.co.in/public/v2/posts");
    const posts = response.data;
    const recentPosts = posts.slice(0, 3);
    return recentPosts;
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    throw error;
  }
};

export const getComment = async (id: number) => {
  try {
    const response = await axios.get(`https://gorest.co.in/public/v2/comments`);
    const data = response.data.filter(
      (comment: CommentType) => comment.post_id === id
    );
    return data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};
