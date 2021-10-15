import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

import menu from '../images/menu.png';
import bitcoin from '../images/bitcoin.gif';

const Nav = (props) => {
  return (
    <Navbar expand='lg' bg='light' variant='dark' sticky='top'>
      <Container fluid='md'>
        <Navbar.Brand href='#' className='text-dark d-flex'>
          <img src={bitcoin} alt='' width='40' height='40' />
          <h2>CRYPTODY</h2>
        </Navbar.Brand>
        <img
          className='shadow'
          onClick={props.onClick}
          src={menu}
          alt='Menu'
          width='40'
          height='40'
        />
      </Container>
    </Navbar>
  );
};

export default Nav;
