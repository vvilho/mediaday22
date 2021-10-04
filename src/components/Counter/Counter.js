import React from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';
import './counter.css';


const Counter = ({startDate, startTime}) => {
    console.log('aloitus', startDate, startTime)
  const [day, month, year] = startDate.split('.').map(Number);
    console.log('splitted date', day, month, year)
    console.log('typeof', typeof(day));
  const [hour, minutes] = startTime.split(':').map(Number);


  return (
      <FlipCountdown
          hideYear
          monthTitle='Kuukautta'
          dayTitle='Päivää'
          hourTitle='Tuntia'
          minuteTitle='Minuuttia'
          secondTitle='Sekuntia'
          endAtZero
          endAt={`${year}-${month}-${day} ${hour}:${minutes}`} // Date/Time
      />
  );
}

export default Counter;
