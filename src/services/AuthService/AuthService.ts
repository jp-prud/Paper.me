export interface SignUpParamsDTO {
  email: string;
  password: string;
}

export function AuthService() {
  async function signIn(signUpDTO: SignUpParamsDTO) {
    const response = await fetch('http://localhost:3000/auth/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(signUpDTO),
    });

    return response.json();
  }

  return {
    signIn,
  };
}