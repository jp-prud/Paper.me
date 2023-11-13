import {postListMock, renderHook, waitFor} from '@tests';

import {useHomeScreen} from './useHomeScreen';

const mockedUsePostList = jest.fn();

jest.mock('@hooks', () => {
  const originalModule = jest.requireActual('@hooks');
  return {
    ...originalModule,
    usePostList: () => mockedUsePostList,
  };
});

describe('useHomeScreen - Integration', () => {
  it('should correctly integration beetween HomeScreen and usePostList', async () => {
    const {result} = renderHook(() => useHomeScreen());

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    const {postList} = result.current;

    expect(postList).toEqual(postListMock);
  });
});
