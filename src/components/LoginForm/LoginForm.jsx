import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Button, Wrapper, Form, Input } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <label >
          Email
          <Input type="email" name="email" placeholder='Your Email'/>
        </label>
        <label >
          Password
          <Input type="password" name="password" placeholder='Password' />
        </label>
        <Button type="submit">Log In</Button>
      </Form>
    </Wrapper>
  );
};
