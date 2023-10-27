import {PostService} from '@services';
import {useMutation} from '@tanstack/react-query';
import {CreatePostDTO, MutationOptions, PostProps} from '@types';

interface useCreatePostProps {
  options?: MutationOptions<PostProps>;
}

export function useCreatePost({options}: useCreatePostProps) {
  const {create} = PostService();

  const {mutate, isPending, isError} = useMutation<
    PostProps,
    unknown,
    CreatePostDTO
  >({
    mutationFn: createPostDTO => create(createPostDTO),
    onSuccess: data => {
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || 'Ocorreu um erro inesperado!');
      }
    },
  });

  async function createPost(createPostDTO: CreatePostDTO) {
    const {title, subtitle, content, description, thumbnail} = createPostDTO;

    mutate({
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
    error: isError,
    isLoading: isPending,
  };
}
