import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGetCryptosstatsQuery } from '../services/cryptoApi';
import Loader from '../components/Loader';
import millify from 'millify';
import Cryptos from '../components/Cryptos';
import { Nav } from 'react-bootstrap';

const HomePage = () => {
  const { data, isFetching } = useGetCryptosstatsQuery();
  const globalStats = data?.data;

  if (isFetching) return <Loader />;
  return (
    <div className='bg-light'>
      {/* <Test /> */}
      <h1 className='d-flex flex-start m-2 pt-3'>Global Crypto Stats</h1>
      <Container fluid='sm' className='pt-2'>
        <Row>
          <Col className='shadow m-2'>
            <h2 className='title'>TotalCoins</h2>
            <p className='number'>{millify(globalStats.totalCoins)}</p>
          </Col>
          <Col className='shadow m-2'>
            <h2 className='title'>TotalMarkets</h2>
            <p className='number'>{millify(globalStats.totalMarkets)}</p>
          </Col>
        </Row>
        <Row>
          <Col className='shadow m-2'>
            <h2 className='title'>TotalExchanges</h2>
            <p className='number'>{millify(globalStats.totalExchanges)}</p>
          </Col>

          <Col className='shadow m-2'>
            <h2 className='title'>TotalMarketCap</h2>
            <p className='number'>{millify(globalStats.totalMarketCap)}</p>
          </Col>
        </Row>
        <Row>
          <Col className='shadow m-2'>
            <h2 className='title'>Total24hVolume</h2>
            <p className='number'>{millify(globalStats.total24hVolume)}</p>
          </Col>
          <Col className='shadow m-2'>
            <h2 className='title'>Total CryptoCurrencies</h2>
            <p className='number'>{millify(globalStats.totalCoins)}</p>
          </Col>
        </Row>
      </Container>
      <div className='d-flex flex-start m-2'>
        <h1>Top 10 CryptoCurrencies In The World</h1>
        <Nav.Link href='/Cryptos' size='lg'>
          See More
        </Nav.Link>
      </div>

      <Cryptos breif />
    </div>
  );
};

export default HomePage;
