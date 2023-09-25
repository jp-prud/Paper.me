import {MutationOptions, useMutation} from '@infra';

import PostService from '../../../services/PostService';
import {CreatePostDTO} from '../Post.types';

interface useCreatePostProps {
  options?: MutationOptions<void>;
}

export function useCreatePost({options}: useCreatePostProps) {
  const {mutate, error, isLoading} = useMutation<CreatePostDTO, any>(
    createPostDTO => PostService.create(createPostDTO),
    options,
  );

  async function createPost(createPostDTO: CreatePostDTO) {
    const {title, subtitle, content, description, thumbnail} = createPostDTO;

    await mutate({
      title,
      subtitle,
      content,
      description,
      thumbnail,
      published: true,
      type: 'ARTICLE',
    });
  }

  return {
    createPost,
    error,
    isLoading,
  };
}
