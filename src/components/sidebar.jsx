import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav, Offcanvas, ListGroup } from 'react-bootstrap';
import HomePage from '../pages/homepage';
import Cryptos from './Cryptos';
import home from '../images/home.png';
import money from '../images/money.png';
import newspaper from '../images/newspaper.png';
import exchange from '../images/exchange.png';
import cryptocurrency from '../images/cryptocurrency.png';
import CurrencyDetails from './CurrencyDetails';
import Exchanges from './Exchanges';
import News from '../pages/News';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: '/Cryptos',
    exact: true,
    main: () => <Cryptos />,
  },
  {
    path: '/crypto/:coinId',
    exact: true,
    main: () => <CurrencyDetails />,
  },
  {
    path: '/Exchange',
    exact: true,
    main: () => <Exchanges />,
  },
  {
    path: '/News',
    exact: true,
    main: () => <News breif />,
  },
];

console.log(routes);

const Sidebar = (props) => {
  return (
    <Router>
      <Offcanvas
        scroll='true'
        placement='start'
        show={props.show}
        onHide={props.onHide}
        className='bg-dark text-white'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className='d-flex'>
              <img src={money} alt='' width='50' height='50' />
              <h1 className='m-2'>CRYPTODY</h1>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <ListGroup as='ul'>
            <ListGroup.Item as='li' action className='bg-dark text-white'>
              <Nav.Link href='/' className='text-white'>
                <img
                  className='icons filter'
                  src={home}
                  alt=''
                  width='20'
                  height='20'
                />
                Home
              </Nav.Link>
              {/* <Link to='/'>Home</Link> */}
            </ListGroup.Item>
            <ListGroup.Item as='li' action className='bg-dark text-white'>
              <Nav.Link href='/cryptos' className='text-white'>
                <img
                  className='icons filter'
                  src={cryptocurrency}
                  alt=''
                  width='20'
                  height='20'
                />
                Cyptocurrencies
              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item as='li' action className='bg-dark text-white'>
              <Nav.Link href='/Exchange' className='text-white'>
                <img
                  className='icons filter'
                  src={exchange}
                  alt=''
                  width='20'
                  height='20'
                />
                Exchange
              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item as='li' action className='bg-dark text-white'>
              <Nav.Link href='/News' className='text-white'>
                <img
                  className='icons filter'
                  src={newspaper}
                  alt=''
                  width='20'
                  height='20'
                />
                News
              </Nav.Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>

      <Switch>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Sidebar;
