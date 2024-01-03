export type PostType = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

export type UserType = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

export type FormUserType = {
  name: string;
  email: string;
  gender: string;
  status: string;
};

export type CommentType = {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
};
