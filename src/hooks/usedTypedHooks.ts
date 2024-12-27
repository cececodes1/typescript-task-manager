import { useAppContext } from '../context/AppContext';

export const useTypedHooks = {
  useAuth: () => {
    const { isAuthenticated, user, login, logout } = useAppContext();
    return { isAuthenticated, user, login, logout };
  },
};
