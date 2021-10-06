import React, {useEffect, useState} from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';
import './counter.css';


const Counter = ({startDate, startTime}) => {
  const [counterSize, setCounterSize] = useState('medium');
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [day, month, year] = startDate.split('.').map(Number);
  const [hour, minutes] = startTime.split(':').map(Number);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  }

  useEffect(()=>{
    window.addEventListener('resize', handleResize);
  }, []);


  useEffect(() => {

    if(windowSize<350){
      setCounterSize('extra-small');
    }else if(windowSize< 768){
      setCounterSize('small');
    }else {
      setCounterSize('medium');
    }

  }, [windowSize]);




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
