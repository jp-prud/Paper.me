import {PostService} from '@services';
import {useMutation} from '@tanstack/react-query';
import {CreatePostDTO, MutationOptions, PostProps} from '@types';

export function useCreatePost(options?: MutationOptions<PostProps>) {
  const {create} = PostService();

  const {mutate, isSuccess, isPending, isError} = useMutation<
    PostProps,
    unknown,
    CreatePostDTO
  >({
    mutationFn: createPostDTO => create(createPostDTO),
    retry: false,
    onSuccess: data => {
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(
          options?.errorMessage || "The post couldn't be created!",
        );
      }
    },
  });

  function createPost(createPostDTO: CreatePostDTO) {
    return mutate({
      ...createPostDTO,
      published: true,
      type: 'ARTICLE',
    });
  }

  return {
    createPost,
    isSuccess,
    isError,
    isLoading: isPending,
  };
}
