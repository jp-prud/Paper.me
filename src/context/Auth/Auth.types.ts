import {SignUpParamsDTO} from '../../services/AuthService';

export interface AuthProps {
  isAuthenticated: boolean;
}

export interface AuthServiceProps {
  handleSignIn: (data: SignUpParamsDTO) => void;
  handleSignUp: () => void;
  handleLogout: () => void;
  isLoading: boolean;
}
