import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import Sidebar from './components/sidebar';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='App'>
      <Nav onClick={handleShow} />
      <Sidebar show={show} onHide={handleClose} />
      <Footer />
    </div>
  );
}
export default App;
