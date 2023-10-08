import {renderHook, act, waitFor, mockUser} from '@tests';

import {useGetUserData} from '../useGetUserData';

describe('UseGetUserData', () => {
  it('should seek user data and update correct states', async () => {
    const {result} = renderHook(() => useGetUserData());

    const fetchUserDataMock = jest.spyOn(result.current, 'getUserData');

    await act(async () => {
      await result.current.getUserData();
    });

    await waitFor(() => {
      expect(fetchUserDataMock).toHaveBeenCalledTimes(1);
    });

    const {userData, isLoading, error} = result.current;

    expect(userData).toEqual(mockUser);
    expect(isLoading).toBe(false);
    expect(error).toBe(false);
  });
});
