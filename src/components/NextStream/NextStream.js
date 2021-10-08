import {useEffect, useState} from 'react';

const NextStream = ({eventData, children}) => {

  const [nextStream, setNextStream] = useState({});

  const isNext = (event) => {
      let [eventStartDay, eventStartMonth, eventStartYear] = event?.startDate.split(
          '.').map(Number);
      let [eventStartHour, eventStartMinute] = event?.startTime.split(':')
      .map(Number);

      let eventStartDateObject = new Date(eventStartYear, eventStartMonth - 1, eventStartDay, eventStartHour, eventStartMinute);

      if (eventStartDateObject > new Date()){
        return event;
      }
  };

  const setNextStreamValue = () => {
    const nextEvent = eventData?.find(isNext);
    setNextStream(nextEvent);
  };

  useEffect(() => {
    setNextStreamValue();

    const interval = setInterval(setNextStreamValue, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [eventData]);

  return children(nextStream);

};

export default NextStream;
