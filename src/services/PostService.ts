import {CreatePostDTO, PostProps} from '@domain';

import {HttpClient} from './utils/HttpClient';

class PostService {
  async listAll() {
    const response = await HttpClient.get<PostProps[]>('/posts');

    return response.data;
  }

  async resumeList() {
    const response = await HttpClient.get<PostProps[]>('/posts/resume');

    return response.data;
  }

  async findById(postId: PostProps['id']) {
    const response = await HttpClient.get<PostProps>(`/posts/${postId}`);

    return response.data;
  }

  async create(createPostDTO: CreatePostDTO) {
    const response = await HttpClient.post<PostProps>('/posts', createPostDTO);

    return response.data;
  }
}

export default new PostService();
