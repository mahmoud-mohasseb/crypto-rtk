import millify from 'millify';
import React from 'react';
import { Table } from 'react-bootstrap';
import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchanges = data?.data?.exchanges;
  console.log(exchanges);
  if (isFetching) return <Loader />;
  return (
    <div>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>CoinIcon</th>
            <th>volume</th>
            <th>numberOfMarkets</th>
            <th>marketShare</th>
          </tr>
        </thead>
        {exchanges.map((item) => (
          <tbody>
            <tr>
              <td>{item.rank}</td>
              <td>
                <img src={item.iconUrl} width='20' height='20' alt='' />
                <p>{item.name}</p>
              </td>
              <td>{millify(item.volume)} USD</td>
              <td>{millify(item.numberOfMarkets)}</td>
              <td>{millify(item.marketShare)}%</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default Exchanges;
