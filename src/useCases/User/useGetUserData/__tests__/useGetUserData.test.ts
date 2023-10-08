import {renderHook, act, waitFor, mockUser} from '@tests';

import {useGetUserData} from '../useGetUserData';

describe('UseGetUserData', () => {
  it('should seek user data and update correct states', async () => {
    const {result} = renderHook(() => useGetUserData());

    await act(async () => {
      await result.current.getUserData();
    });

    waitFor(() => {
      expect(result.current.getUserData).toHaveBeenCalledTimes(1);
    });

    const {userData, isLoading, error} = result.current;

    expect(userData).toEqual(mockUser); // Verifica a igualdade entre userData e mockUser
    expect(isLoading).toBe(false);
    expect(error).toBe(false);
  });
});
