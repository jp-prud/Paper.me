import {CreatePostDTO, PostProps} from '@types';

import {HttpClient} from '../utils/HttpClient';

export function PostService() {
  async function listAll() {
    const response = await HttpClient.get<PostProps[]>('posts');

    if (response.status !== 200) {
      throw new Error('Error on list posts');
    }

    return response.data;
  }

  async function resumeList() {
    const response = await HttpClient.get<PostProps[]>('posts/resume');

    return response.data;
  }

  async function findById(postId: PostProps['id']) {
    const response = await HttpClient.get<PostProps>(`posts/${postId}`);

    return response.data;
  }

  async function create(createPostDTO: CreatePostDTO) {
    const response = await HttpClient.post<PostProps>('posts', createPostDTO);

    return response.data;
  }

  return {
    listAll,
    resumeList,
    findById,
    create,
  };
}
