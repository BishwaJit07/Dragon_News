import React from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { FaFacebookSquare, FaGithub , FaGoogle, FaInstagram, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import Qzone from './Qzone';
import bg from '../../../assets/bg.png'
const Rightnav = () => {
    return (
        <div className='text-center'>
            Login With <br />
           <Button variant="outline-primary" className='mt-4 mb-4'><FaGoogle />Login With Google</Button>
           <Button variant="outline-secondary" ><FaGithub/>
            Login with Github</Button>
            <div>
                <h3 className='mt-4 mb-4'>Find Us On</h3>
                <ListGroup>
      <ListGroup.Item><FaFacebookSquare/>FaceBook</ListGroup.Item>
      <ListGroup.Item><FaTwitterSquare/>Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagramSquare/>Instragram</ListGroup.Item>
    
    </ListGroup>
            </div>
            <div>
                <Qzone/>
                <div>
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Rightnav;