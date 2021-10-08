import {useEffect, useState} from 'react';

const NextStream = ({eventData, children}) => {

  console.log('eventData', eventData);

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
    console.log('nextEvent', nextEvent);
    setNextStream(nextEvent);
  };

  useEffect(() => {
    const interval = setInterval(setNextStreamValue, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(()=>{
    console.log('nextstreamstate', nextStream);
  }, [nextStream])

  return children(nextStream);

};

export default NextStream;
