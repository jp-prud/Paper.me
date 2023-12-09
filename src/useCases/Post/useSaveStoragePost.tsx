import {storage} from '@services';
import {useMutation} from '@tanstack/react-query';
import {MutationOptions, PostProps, StorageKeys} from '@types';

export function useSaveStoragePost(options?: MutationOptions<unknown>) {
  const {data, isPending, isError, mutate} = useMutation<
    unknown,
    unknown,
    PostProps
  >({
    mutationKey: [StorageKeys.Posts],
    mutationFn: async (post: PostProps) => {
      await storage.setItem(StorageKeys.Posts, post);
    },
    retry: false,
    onSuccess: response => {
      if (options?.onSuccess) {
        options.onSuccess(response);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError('The post could not be saved!');
      }
    },
  });

  return {
    savePost: (post: PostProps) => mutate(post),
    data,
    isPending,
    isError,
  };
}
