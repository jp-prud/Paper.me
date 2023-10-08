import {waitFor, renderHook, act, mockPostList} from '@tests';

import {usePostList} from '../usePostList';

describe('UsePostList', () => {
  it.skip('should seek postList and update correct states', async () => {
    const {result} = renderHook(() => usePostList());

    const fetchDataMock = jest.spyOn(result.current, 'fetchData');

    await act(() => {
      result.current.fetchData();
    });

    await waitFor(() => {
      expect(fetchDataMock).toHaveBeenCalledTimes(1);
    });

    const {postList, isLoading, error} = result.current;

    expect(postList).toEqual(mockPostList);
    expect(isLoading).toBe(false);
    expect(error).toBe(false);
  });

  it.skip('should refetch data when call refetchData', async () => {
    const {result} = renderHook(() => usePostList());

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
