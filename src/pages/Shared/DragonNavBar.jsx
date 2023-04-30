import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/Authprovider';
import { FaUser, FaUserCircle } from 'react-icons/fa';


const DragonNavBar = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogout = ()=>{
      logOut()
          .then()
          .catch(error=>
            console.log(error)
          )
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
      <Container >
        <Navbar.Brand href="#home"> <Nav.Link href="/category/0">Home</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
           
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
           
          </Nav>
          <Nav>
           { user && <FaUserCircle style={{ fontSize: '2rem' }} />}

          {  user ? <Button variant="secondary" onClick={handleLogout}>LogOut</Button> : 
          <Link to='/login'><Button variant="secondary">LogIn</Button>
          </Link>}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default DragonNavBar;