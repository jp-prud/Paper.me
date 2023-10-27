import {waitFor, renderHook, act, mockPostList, AllTheProviders} from '@tests';

import {usePostList} from '../usePostList';

describe('UsePostList', () => {
  it('should seek postList and update correct states', async () => {
    const {result} = renderHook(() => usePostList(), {
      wrapper: AllTheProviders,
    });

    const fetchDataMock = jest.spyOn(result.current, 'refetch');

    await act(async () => {
      await result.current.refetch();
    });

    await waitFor(() => {
      expect(fetchDataMock).toHaveBeenCalledTimes(1);
    });

    const {postList, isLoading, error} = result.current;

    expect(postList).toEqual(mockPostList);
    expect(isLoading).toBe(false);
    expect(error).toBe(false);
  });

  it('should refetch data when call refetchData', async () => {
    const {result} = renderHook(() => usePostList(), {
      wrapper: AllTheProviders,
    });

    const refetchDataMock = jest.spyOn(result.current, 'refetch');

    await act(() => {
      result.current.refetch();
    });

    await waitFor(() => {
      expect(refetchDataMock).toHaveBeenCalledTimes(1);
    });

    const {postList, isLoading, error} = result.current;

    expect(postList).toEqual(mockPostList);
    expect(isLoading).toBe(false);
    expect(error).toBe(false);
  });

  test.todo('should error be true and postList be empty when fetch fails');
});
