import { useSelector } from 'react-redux';
import { AuthStatus } from '../const';
import { getAuthStatus } from '../store/user-process/selectors-user-process';

export function useAuth(): boolean {
  const authStatus = useSelector(getAuthStatus);
  return (authStatus===AuthStatus.Auth);
}
