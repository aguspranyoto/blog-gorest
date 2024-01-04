import { CommentType, FormUserType, PostType, UserType } from "@/types";
import axios from "axios";

export const getUsers: () => Promise<UserType[]> = async () => {
  try {
    const response = await axios.get("https://gorest.co.in/public/v2/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getSingleUser: (id: number) => Promise<UserType> = async (id) => {
  try {
    const response = await axios.get(
      `https://gorest.co.in/public/v2/users/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

export const getPosts: () => Promise<PostType[]> = async () => {
  try {
    const response = await axios.get("https://gorest.co.in/public/v2/posts", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getSinglePost: (id: number) => Promise<PostType> = async (id) => {
  try {
    const response = await axios.get(
      `https://gorest.co.in/public/v2/posts/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

export const getRecentPost: () => Promise<PostType[]> = async () => {
  try {
    const response = await axios.get("https://gorest.co.in/public/v2/posts", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_TOKEN}`,
      },
    });
    const posts = response.data;
    const recentPosts = posts.slice(0, 3);
    return recentPosts;
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    throw error;
  }
};

export const getComment: (id: number) => Promise<CommentType[]> = async (
  id
) => {
  try {
    const response = await axios.get(
      `https://gorest.co.in/public/v2/comments`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_TOKEN}`,
        },
      }
    );
    const data = response.data.filter(
      (comment: CommentType) => comment.post_id === id
    );
    return data;
  } catch (error) {
    console.error("Error fetching comment:", error);
    throw error;
  }
};

export const deleteUser: (id: number) => Promise<boolean> = async (id) => {
  const url = `https://gorest.co.in/public/v2/users/${id}`;
  const response = await axios.delete(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_TOKEN}`,
    },
  });

  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
};

export const createUser: (data: FormUserType) => Promise<FormUserType> = async (
  data
) => {
  try {
    const response = await axios.post(
      "https://gorest.co.in/public/v2/users",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const editUser: (
  data: FormUserType,
  id: number
) => Promise<FormUserType> = async (data, id) => {
  try {
    const response = await axios.put(
      `https://gorest.co.in/public/v2/users/${id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error editing user:", error);
    throw error;
  }
};
