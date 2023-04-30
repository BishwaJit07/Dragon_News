import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import DragonNavBar from '../pages/Shared/DragonNavBar';
import Footer from '../pages/Shared/Footer';
import Header from '../pages/Shared/Header';
import Leftnav from '../pages/Shared/navigation/LeftNav';
import Rightnav from '../pages/Shared/navigation/RightNav';

const Main = () => {
    return (
        <div>
            <Header/>
            <DragonNavBar/>
            <Container>
      
      <Row>
        <Col lg={3} md={3}><Leftnav/> </Col>
        <Col lg={6} md={6}><Outlet/></Col>
      <Col lg={3} md={3}> <Rightnav></Rightnav> </Col>
    </Row>
    </Container>
            <Footer/>
        </div>
    );
};

export default Main;