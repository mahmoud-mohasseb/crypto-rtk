import React, { useState, useEffect } from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';
import millify from 'millify';
import { Card, Col, Row, InputGroup, FormControl, Nav } from 'react-bootstrap';

const Cryptos = ({ breif }) => {
  const count = breif ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [coins, setcoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log(cryptoList?.data?.coins);
    setcoins(cryptoList?.data?.coins);

    const filterData = cryptoList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm),
    );
    setcoins(filterData);
  }, [cryptoList, searchTerm]);

  if (isFetching) return <Loader />;
  return (
    <div>
      {!breif && (
        <div className='m-5'>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Search Cryptocurrency'
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
          </InputGroup>
        </div>
      )}
      <div className='m-4'>
        <Row s={1} xs={2} md={3} lg={4} className='g-4'>
          {coins?.map((item, rank, index, name, price, marketCap, change) => (
            <Col>
              <Nav.Link key={item.id} href={`/crypto/${item.id}`}>
                {/* <Link key={item.id} to={`/crypto/${item.id}`}> */}
                <Card className='mb-2 shadow' style={{ width: '18rem' }}>
                  <Card.Header key={index}>
                    <div>
                      <p key={rank}>{item.rank}</p>
                      <img
                        src={item.iconUrl}
                        alt={item.name}
                        width='50'
                        height='50'
                      />
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <div>
                        <p key={name} style={{ color: item.color }}>
                          {item.name}
                        </p>
                      </div>
                    </Card.Title>
                    <Card.Text>
                      <div>
                        <p key={price} style={{ color: item.color }}>
                          price: {millify(item.price)}
                        </p>
                        <p key={marketCap} style={{ color: item.color }}>
                          marketCap: {millify(item.marketCap)}
                        </p>
                        <p key={change} style={{ color: item.color }}>
                          change: {item.change} %
                        </p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Nav.Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Cryptos;
