import {renderHook, act, waitFor, mockUser} from '@tests';

import {useGetUserData} from './useGetUserData';

describe('UseGetUserData', () => {
  it('should seek user data and update correct states', async () => {
    const {result} = renderHook(() => useGetUserData());

    const getDataMock = jest.spyOn(result.current, 'getUserData');

    await act(() => {
      result.current.getUserData();
    });

    await waitFor(() => {
      expect(getDataMock).toHaveBeenCalledTimes(1);
    });

    const {userData, isLoading, error} = result.current;

    expect(mockUser).toEqual(userData);
    expect(isLoading).toBe(false);
    expect(error).toBe(false);
  });
});
