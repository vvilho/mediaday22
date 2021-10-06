import React, {useEffect, useState} from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';
import './counter.css';


const Counter = ({startDate, startTime}) => {
    console.log('aloitus', startDate, startTime)
  const [counterSize, setCounterSize] = useState('medium');
  const [day, month, year] = startDate.split('.').map(Number);
    console.log('splitted date', day, month, year)
    console.log('typeof', typeof(day));
  const [hour, minutes] = startTime.split(':').map(Number);


  useEffect(() => {
    console.log('moi', window.innerWidth);
    if(window.innerWidth< 768){
      setCounterSize('small');
    }else {
      setCounterSize('medium');
    }

  }, [window.innerWidth]);




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
