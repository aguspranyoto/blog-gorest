export interface PostType {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export interface UserType {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export interface CommentType {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}
