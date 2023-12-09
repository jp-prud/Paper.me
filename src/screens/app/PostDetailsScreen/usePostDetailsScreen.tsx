import {useEffect} from 'react';

import {PostProps} from '@types';
import {useGetPostById, useSaveStoragePost} from '@useCases';

export function usePostDetailsScreen(postId: PostProps['id']) {
  const {post, isLoading, isError} = useGetPostById(postId);

  const {data, savePost} = useSaveStoragePost();

  useEffect(() => {
    if (isLoading || !post) {
      return;
    }

    savePost(post);
  }, [post, isLoading, savePost]);

  return {
    post,
    isLoading,
    isError,
    data,
  };
}
