import React from 'react'
import { NavLink } from 'react-router-dom'
import { Wrapper } from './AuthNav.styled'

const AuthNav = () => {
  return (
    <Wrapper>
      <NavLink to="/login">
        <button>Log In</button>
      </NavLink>
      <NavLink to="/register">
        <button>Register</button>
      </NavLink>
    </Wrapper>
  )
}

export default AuthNav
