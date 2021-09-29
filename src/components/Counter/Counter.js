import React from 'react';
import FlipCountdown from '@rumess/react-flip-countdown'

const Counter = ({startDate, startTime}) => {
  const [day, month, year] = startDate.split('.').map(Number);
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
          endAt={`${year}-${month}-${day} ${hour}:${minutes}:00`} // Date/Time
      />
  );
}

export default Counter;
