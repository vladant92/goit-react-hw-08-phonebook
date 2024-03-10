import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from 'hooks';
import { Layout } from './Layout';
import { Spinner } from './Spinner/Spinner';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRout } from './PrivateRout';

const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const spinnerStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    margin: '0 auto',
  };

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    // <b>'Fetching user data...'</b>
    <Spinner style={spinnerStyle} size={50} />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contacts"
          element={<PrivateRout component={ContactsPage} redirectTo="/login" />}
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
