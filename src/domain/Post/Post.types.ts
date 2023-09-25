export type PostType = 'ARTICLE' | 'DISERTATION' | 'PROJECT';

export interface PostProps {
  id: string;
  userId: string;
  categoryId?: string;
  title: string;
  subtitle: string;
  description: string;
  published: Boolean;
  content: string;
  thumbnail?: string;
  type: PostType;
  likes: number;
  createdAt: string;
  updatedAt: string;
  user: {
    name: string;
    avatar: string;
  };
  _count: {
    comments: number;
  };
}

export interface PostResumeProps {}

export interface CreatePostDTO {
  title: string;
  subtitle: string;
  content: string;
  description: string;
  thumbnail?: string;
}
