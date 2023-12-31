import {CommentProps, CreateCommentDTO, PostProps} from '@types';

import {HttpClient} from '../utils/HttpClient';

export function CommentService() {
  async function listByPost(postId: PostProps['id']) {
    const response = await HttpClient.get<CommentProps[]>(
      `/comments/${postId}`,
    );

    return response.data;
  }

  async function create(
    postId: PostProps['id'],
    createCommentDTO: CreateCommentDTO,
  ) {
    const response = await HttpClient.post<CommentProps>(
      `/comments/${postId}`,
      createCommentDTO,
    );

    return response.data;
  }

  return {
    listByPost,
    create,
  };
}
