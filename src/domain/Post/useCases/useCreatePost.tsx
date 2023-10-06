import {PostService} from '@services';

import {MutationOptions, useMutation} from '@hooks';

import {CreatePostDTO} from '../Post.types';

interface useCreatePostProps {
  options?: MutationOptions<void>;
}

export function useCreatePost({options}: useCreatePostProps) {
  const {create} = PostService();

  const {mutate, error, isLoading} = useMutation<CreatePostDTO, any>(
    createPostDTO => create(createPostDTO),
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
