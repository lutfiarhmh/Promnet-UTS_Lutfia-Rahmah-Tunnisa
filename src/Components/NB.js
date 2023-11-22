import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'animate.css';

const NB = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#eee3cb' }}>
      <Container >
        <Navbar.Brand href="#home" className="welcome animate__animated animate__backInDown">
          <h1 >
            Lutfia Rahmah Tunnisa
            <span className='font: size 70px'>&#128059;</span>
          </h1>
        </Navbar.Brand >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto">
            <Nav.Link  href="#home">Home</Nav.Link>
            <Nav.Link  href="#about">About</Nav.Link>
            <Nav.Link href="#galery">Galery</Nav.Link>
            <Nav.Link  href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NB;
