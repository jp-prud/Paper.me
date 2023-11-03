import {CommentService} from '@services';
import {useQuery} from '@tanstack/react-query';
import {PostProps, QueryKeys} from '@types';

export function useListCommentsByPost(postId: PostProps['id']) {
  const {listByPost} = CommentService();

  const {data, isLoading, isFetching, isSuccess, isError, refetch} = useQuery({
    queryKey: [QueryKeys.ListCommentsByPost, postId],
    queryFn: () => listByPost(postId),
    retry: false,
  });

  return {
    refetch,
    isSuccess,
    commentsList: data,
    isLoading: isLoading || isFetching,
    isError,
  };
}
