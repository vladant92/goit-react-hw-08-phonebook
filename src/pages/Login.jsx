import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react'
import { Helmet } from 'react-helmet-async';

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  )
}

export default Login
