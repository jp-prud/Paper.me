import {HttpClient} from './utils/HttpClient';

class UserService {
  async me() {
    const response = await HttpClient.get('/users/me');

    return response.data;
  }
}

export default new UserService();
