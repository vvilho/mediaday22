import React from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';
import './counter.css';


const Counter = ({startDate, startTime}) => {
    console.log('aloitus', startDate, startTime)
  const [day, month, year] = startDate.split('.').map(Number);
    console.log('splitted date', day, month, year)
    console.log('typeof', typeof(day));
  const [hour, minutes] = startTime.split(':').map(Number);
  let counterSize = 'medium';

  if(window.innerWidth < 768){
    counterSize = 'small';
  }


  return (
      <FlipCountdown
          hideYear
          monthTitle='kk'
          dayTitle='vrk'
          hourTitle='t'
          minuteTitle='min'
          secondTitle='s'
          titlePosition='bottom'
          endAtZero
          size= {counterSize}
          endAt={`${year}-${month}-${day} ${hour}:${minutes}:00`}
      />
  );
}

export default Counter;
