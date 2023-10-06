import {CommentProps, CreateCommentDTO, PostProps} from '@types';

import {HttpClient} from '../utils/HttpClient';

export function CommentService() {
  async function getCommentsByPost(postId: PostProps['id']) {
    const response = await HttpClient.get<CommentProps[]>(
      `/comments/${postId}`,
    );

    return response.data;
  }

  async function create(
    createCommentDTO: CreateCommentDTO,
    postId: PostProps['id'],
  ) {
    const response = await HttpClient.post<CommentProps>(
      `/comments/${postId}`,
      createCommentDTO,
    );

    return response.data;
  }

  return {
    getCommentsByPost,
    create,
  };
}
