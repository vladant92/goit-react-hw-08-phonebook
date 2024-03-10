import { useAuth } from 'hooks';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { Button, Wrapper } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());
  return (
    <Wrapper>
      <div>
        <p>Welcome, {user.name} </p> <p>{user.email}</p>
      </div>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
