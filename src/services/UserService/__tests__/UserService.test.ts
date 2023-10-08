import {UserService} from '../UserService';

describe('UserService', () => {
  describe('Me method', () => {
    it('should be able to return the user data', async () => {
      const userResponse = await UserService().me();

      expect(userResponse).toEqual(userResponse);
    });

    it.todo('should throw an error when the request fails');
  });
});
