import {UserProps} from './User';

export interface CommentProps {
  id: string;
  postId: string;
  userId: string;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
  user: Pick<UserProps, 'name' | 'avatar'>;
}

export interface CreateCommentDTO {
  content: string;
}
