import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';

import { Button, Form, Input, Wrapper } from './RegisterForm.styled';
import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <h1 style={{ textAlign: 'center' }}>Create Account</h1>
        <label>
          User name
          <Input type="text" name="name" placeholder="John Dereck" />
        </label>
        <label>
          Email
          <Input type="email" name="email" placeholder='example@gmail.com'/>
        </label>
        <label>
          Password
          <Input type="password" name="password" placeholder='*******'/>
        </label>
        <Button type="submit">Create</Button>
      </Form>
    </Wrapper>
  );
};
