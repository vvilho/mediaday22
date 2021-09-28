import React from 'react';
import Countdown from 'react-countdown';

const Counter = ({startTime}) => {
  console.log('aika', startTime);
 return  <Countdown date={startTime} />
}

export default Counter;
