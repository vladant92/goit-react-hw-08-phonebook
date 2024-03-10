import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const PrivateRout = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shuldRedirect = !isLoggedIn && !isRefreshing;

  return shuldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
