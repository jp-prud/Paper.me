export interface CommentProps {
  id: number;
  postId: number;
  userId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  user: {
    name: string;
    avatar: string;
  };
}

export interface CreateCommentDTO {
  content: string;
}
