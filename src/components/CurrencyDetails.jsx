import millify from 'millify';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCoinQuery, useGetCoinHistoryQuery } from '../services/cryptoApi';
import Chart from './charts/Chart';
import Loader from './Loader';

const CurrencyDetails = () => {
  const { coinId } = useParams();

  const [timestamp, settimestamp] = useState('7d');
  const { data, isFetching } = useGetCoinQuery(coinId);
  const { data: coinHistory } = useGetCoinHistoryQuery({ coinId, timestamp });

  const coinName = data?.data?.coin;
  console.log(coinHistory?.data?.history);

  const createMarkup = () => {
    return { __html: coinName?.description };
  };

  // console.log(
  //   new Date(coinHistory?.data?.history[1]?.timestamp).toLocaleDateString(),
  // );

  if (isFetching) return <Loader />;
  return (
    <div className='chart'>
      <Chart
        coinHistory={coinHistory}
        coinName={coinName?.name}
        currentPrice={millify(coinName?.price)}
      />

      <div className='d-flex '>
        <img src={coinName?.iconUrl} width='50' height='50' alt='' />
        <h1>{coinName?.name}</h1>
      </div>
      <div dangerouslySetInnerHTML={createMarkup()} className='details' />
    </div>
  );
};

export default CurrencyDetails;
