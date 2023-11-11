export interface SignInDTO {
  email: string;
  password: string;
}

export interface SignUpDTO {
  username: string;
  fullName: string;
  email: string;
  password: string;
}

export interface AuthCredentials {
  accessToken: string;
}
