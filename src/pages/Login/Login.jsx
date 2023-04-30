import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const frome = location.state?.from?.pathname || "/category/0"

   const handleLogin = event => {
        event.preventDefault();
        
        const from = event.target;
        const email = from.email.value;
         const password = from.pass.value

        console.log(email,password);
        
        signIn(email,password)
        .then(result=>{
          const loggedUser=result.user;
          console.log(loggedUser);
          navigate(frome ,{replace : true});
        })
        .catch(error=>{
          console.log(error);

        })
      }
   
    return (
        <Container className='w-50 mx-auto'>
            <p>Please Login Your Account</p>
             <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='pass' placeholder="Password" />
      </Form.Group>
      
      <div className='text-center'>
      <Button variant="secondary" type="submit" className='px-5'>
        Login
      </Button> <br />
      <Form.Text className="text-muted">
      Dont’t Have An Account ? <Link to='/register'  className='text-danger'>Register</Link>
        </Form.Text>
      </div>
    </Form>
        </Container>
    );
};

export default Login;