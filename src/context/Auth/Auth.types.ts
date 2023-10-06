import {SignUpParamsDTO} from '@services';

export interface AuthProps {
  isAuthenticated: boolean;
}

export interface AuthServiceProps {
  handleSignIn: (data: SignUpParamsDTO) => void;
  handleSignUp: () => void;
  handleLogout: () => void;
  isLoading: boolean;
}
