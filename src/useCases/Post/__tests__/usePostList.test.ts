import {
  RefetchOptions,
  QueryObserverSuccessResult,
} from '@tanstack/react-query';
import {waitFor, renderHook, postListMock} from '@tests';
import {PostProps} from '@types';

import {usePostList} from '../usePostList';

describe('UsePostList', () => {
  it('should get postList content', async () => {
    const {result} = renderHook(() => usePostList());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    const {postList, isSuccess, isError} = result.current;

    expect(postList).toEqual(postListMock);
    expect(isSuccess).toEqual(true);
    expect(isError).toBe(false);
  });

  it('should get postList when called refetch method', async () => {
    const {result} = renderHook(() => usePostList());

    const refetchDataMock = jest
      .spyOn(result.current, 'refetch')
      .mockImplementation(async (options?: RefetchOptions) => {
        return {
          data: postListMock,
          isLoading: false,
          isError: false,
          ...options,
        } as unknown as QueryObserverSuccessResult<PostProps[], Error>;
      });

    result.current.refetch();

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(refetchDataMock).toHaveBeenCalledTimes(1);
    });

    const {postList, isError} = result.current;

    expect(postList).toEqual(postListMock);
    expect(isError).toBe(false);
  });

  it.skip('should return error and empty postList when api return error', async () => {
    const {result} = renderHook(() => usePostList());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    const {postList, error, isSuccess} = result.current;

    expect(postList).toEqual([]);
    expect(error).toBe(true);
    expect(isSuccess).toEqual(false);
  });
});
