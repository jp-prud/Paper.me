import {act, mockUser} from '@tests';

import {UserService} from '../UserService';

describe('UserService', () => {
  describe('Me method', () => {
    it('should be able to return the user data', async () => {
      const {me} = UserService();

      let userResponse;

      await act(async () => {
        userResponse = await me();
      });

      expect(userResponse).toEqual(mockUser);
    });

    it.todo('should throw an error when the request fails');
  });
});
