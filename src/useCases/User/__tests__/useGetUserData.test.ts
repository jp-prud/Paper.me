import {renderHook, waitFor, userMock} from '@tests';

import {useGetUserData} from '../useGetUserData';

describe('UseGetUserData', () => {
  it('should seek user data and return success', async () => {
    const {result} = renderHook(() => useGetUserData());

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
    });

    const {userData, isError, isSuccess} = result.current;

    expect(userData).toEqual(userMock);
    expect(isError).toBeFalsy();
    expect(isSuccess).toBeTruthy();
  });
});
