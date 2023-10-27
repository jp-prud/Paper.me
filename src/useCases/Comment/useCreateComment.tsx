import {CommentService} from '@services';
import {useQueryClient, useMutation} from '@tanstack/react-query';
import {
  QueryKeys,
  MutationOptions,
  CommentProps,
  CreateCommentDTO,
  PostProps,
} from '@types';

export function useCreateComment(
  postId: PostProps['id'],
  options?: MutationOptions<CommentProps>,
) {
  const {create} = CommentService();

  const queryClient = useQueryClient();

  const {mutate, isPending, isError} = useMutation<
    CommentProps,
    unknown,
    CreateCommentDTO
  >({
    mutationFn: createCommentDTO => create(postId, createCommentDTO),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.ListCommentsByPost, postId],
      });

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

  async function createComment(createCommentDTO: CreateCommentDTO) {
    const {content} = createCommentDTO;

    mutate({content});
  }

  return {
    createComment,
    isLoading: isPending,
    isError,
  };
}
