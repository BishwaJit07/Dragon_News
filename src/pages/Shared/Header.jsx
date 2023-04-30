import React from 'react';
import logo from '../../../src/assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import DragonNavBar from './DragonNavBar';
import { Link } from 'react-router-dom';


const Header = () => {

  

    return (
        <Container>
        <div className='text-center'>
          <Link to='/'>  <img src={logo} alt="" /></Link>
            <p><small>Journalism Without Fear or Favour</small></p>
            <p>{moment().format("dddd , MMMM Do YYYY")}</p>
        </div>
        <div className='d-flex'> <Button variant="danger" className='p-2'>Danger</Button><Marquee speed={50} >
  I can be a React component, multiple React components, or just some text.
</Marquee> </div>



        </Container>
    );
};

export default Header;