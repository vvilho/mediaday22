import React from 'react';
import Countdown from 'react-countdown';

const Counter = ({startDate, startTime}) => {
  const [day, month, year] = startDate.split('.').map(Number);
  const [hour, minutes] = startTime.split(':').map(Number);

  console.log('aika', day, month, year, (hour < 10 ? '0' + hour : hour)+':'+ (minutes < 10 ? '0' + minutes : minutes));
 return  <Countdown date={startTime} />
}

export default Counter;
