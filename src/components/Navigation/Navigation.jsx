import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo, Nav } from './Navigation.styled';
import { useAuth } from 'hooks';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      {/* <NavLink to="/">PhoneBook</NavLink> */}
      <NavLink to="/"><Logo>Your PhoneBook</Logo></NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </Nav>
  );
};

export default Navigation;
