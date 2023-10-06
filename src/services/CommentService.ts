import {CommentProps, CreateCommentDTO, PostProps} from '@types';

import {HttpClient} from './utils/HttpClient';

class CommentService {
  async getCommentsByPost(postId: PostProps['id']) {
    const response = await HttpClient.get<CommentProps[]>(
      `/comments/${postId}`,
    );

    return response.data;
  }

  async create(createCommentDTO: CreateCommentDTO, postId: PostProps['id']) {
    const response = await HttpClient.post<CommentProps>(
      `/comments/${postId}`,
      createCommentDTO,
    );

    return response.data;
  }
}

export default new CommentService();
