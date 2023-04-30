import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';

const Register = () => {
      const {creatUser}= useContext(AuthContext);

       const [accept, setAccept] = useState(false);
       
      

         const handleReg = event=>{
          event.preventDefault();
          const from = event.target;
          const name = from.name.value;
          const photo = from.photo.value;
          const email = from.email.value;
          const password = from.pass.value;
          console.log(name,email,photo,password);
          
          creatUser(email,password)
          .then(result=>{
            const createdUser = result.user;
            console.log(createdUser);
          })
          .catch(error=>{
            console.log(error);
          })
         }

         const handleAccept = event=>{
          console.log(event.target.checked);
  
          setAccept(event.target.checked)
         
         }


    return (
        <div>
          <Container className='w-50 mx-auto'>
            <p>Please Login Your Account</p>
             <Form onSubmit={handleReg}>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter your name" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="url">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Enter your url" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='pass' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handleAccept} type="checkbox" label="Accept Term & Conditions" />
      </Form.Group>
      <div className='text-center'>
      <Button disabled={!accept} variant="secondary" type="submit" className='px-5'>
        Register
      </Button> <br />
      <Form.Text className="text-muted">
      Already Have An Account ? <Link to='/login'  className='text-danger'>Login</Link>
        </Form.Text>
      </div>
    </Form>
        </Container>
        </div>
    );
};

export default Register;