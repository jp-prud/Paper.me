import {AuthProps, AuthServiceProps} from './Auth.types';
import {useAuthContext} from './useAuthContext';

export function useAuth(): AuthProps {
  const {isAuthenticated} = useAuthContext();

  return {
    isAuthenticated,
  };
}

export function useAuthService(): AuthServiceProps {
  const {handleSignIn, handleSignUp, handleLogout, isLoading} =
    useAuthContext();

  return {handleSignIn, handleSignUp, handleLogout, isLoading};
}
