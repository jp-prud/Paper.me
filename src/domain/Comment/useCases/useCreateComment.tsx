import {CreateCommentDTO, PostProps} from '@domain';
import {MutationOptions, useMutation} from '@infra';

import CommentService from '../../../services/CommentService';

export function useCreateComment(
  postId: PostProps['id'],
  options?: MutationOptions<void>,
) {
  const {mutate, error, isLoading} = useMutation<CreateCommentDTO, any>(
    createCommentDTO => CommentService.create(createCommentDTO, postId),
    options,
  );

  async function createComment(createCommentDTO: CreateCommentDTO) {
    const {content} = createCommentDTO;

    await mutate({content});
  }

  return {
    createComment,
    isLoading,
    error,
  };
}
