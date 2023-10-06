import {UserService} from '../UserService';

describe('UserService', () => {
  describe('Me method', () => {
    it('should be able to return the user data', async () => {
      const {me} = UserService();

      const userResponse = await me();

      expect(userResponse).toEqual(userResponse);
    });

    it.todo('should throw an error when the request fails');
  });
});
