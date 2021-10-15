import React, { useState } from 'react';
import Loader from '../components/Loader';
import { useGetCryptosNewsQuery } from '../services/CryptoNewsAPI';

const News = ({ breif }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

  const { data } = useGetCryptosNewsQuery(100);
  const { data: cryptoNews } = useGetCryptosNewsQuery({
    newsCategory,
    count: breif ? 6 : 12,
  });

  console.log(cryptoNews?.value);
  if (!cryptoNews?.value) return <Loader />;

  return (
    <div>
      <h1>New</h1>
      {cryptoNews?.value.map((index, i) => (
        <div>
          <img
            src={index.image.thumbnail.contentUrl}
            width={index.image.thumbnail.width}
            height={index.image.thumbnail.height}
            alt=''
          />
          <h1>{index.name}</h1>

          {index.provider.map((item) => (
            <img
              src={item.image.thumbnail.contentUrl}
              alt=''
              width={item.image.thumbnail.width}
              height={item.image.thumbnail.height}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default News;
