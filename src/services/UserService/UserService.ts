import {HttpClient} from '../utils/HttpClient';

export function UserService() {
  async function me() {
    const response = await HttpClient.get('/users/me');

    return response.data;
  }

  return {
    me,
  };
}
