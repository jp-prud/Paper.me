import {CommentService} from '@services';
import {useQuery} from '@tanstack/react-query';
import {PostProps, QueryKeys} from '@types';

export function useListCommentsByPost(postId: PostProps['id']) {
  const {getCommentsByPost} = CommentService();

  const {data, isLoading, isFetching, isError, refetch} = useQuery({
    queryKey: [QueryKeys.ListCommentsByPost, postId],
    queryFn: () => getCommentsByPost(postId),
  });

  return {
    refetch,
    commentsList: data,
    isLoading: isLoading || isFetching,
    isError,
  };
}
