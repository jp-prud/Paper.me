import {act, renderHook, waitFor} from '@tests';
import {mockPostList} from 'test';

import {useHomeScreen} from '../useHomeScreen';

describe('useHomeScreen', () => {
  it("should create 'homeContentRef' when hook is called", () => {
    const {result} = renderHook(() => useHomeScreen());

    const {homeContentRef} = result.current;

    expect(homeContentRef.current).toBeDefined();
  });

  it("should retrieve and update values from 'usePostList'", async () => {
    const {result} = renderHook(() => useHomeScreen());

    await act(async () => {
      await waitFor(() => {
        return !isLoading;
      });
    });

    const {postList, isLoading, error} = result.current;

    expect(postList).toEqual(mockPostList);
    expect(isLoading).toBe(false);
    expect(error).toBe(false);
  });
});
