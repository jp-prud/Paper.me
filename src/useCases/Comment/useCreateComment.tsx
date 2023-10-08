import {CommentService} from '@services';
import {CreateCommentDTO, PostProps} from '@types';

import {MutationOptions, useMutation} from '@hooks';

export function useCreateComment(
  postId: PostProps['id'],
  options?: MutationOptions<void>,
) {
  const {create} = CommentService();

  const {mutate, error, isLoading} = useMutation<CreateCommentDTO, any>(
    createCommentDTO => create(createCommentDTO, postId),
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
