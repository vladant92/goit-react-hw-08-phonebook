import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import React from 'react'
import { Helmet } from 'react-helmet-async';

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      
      <RegisterForm/>
    </div>
  )
}

export default Register
