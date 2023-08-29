import {SignUpParamsDTO} from '@context';

class AuthService {
  async signIn(signUpDTO: SignUpParamsDTO) {
    const response = await fetch('http://localhost:3000/auth/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(signUpDTO),
    });

    return response.json();
  }
}

export default new AuthService();
