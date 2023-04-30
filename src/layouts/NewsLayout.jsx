import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import DragonNavBar from '../pages/Shared/DragonNavBar';
import Footer from '../pages/Shared/Footer';
import Header from '../pages/Shared/Header';
import Rightnav from '../pages/Shared/navigation/RightNav';

const NewsLayout = () => {
    return (
        <div>
             <Header></Header>
           
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <Rightnav></Rightnav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;