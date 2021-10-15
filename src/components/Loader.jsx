import React from 'react';
import cryptoloading from '../images/cryptoloading.gif';

const Loader = () => {
  return (
    <div>
      <img src={cryptoloading} alt='' width='200' height='200' />
    </div>
  );
};

export default Loader;
