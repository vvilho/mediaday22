import {useEffect, useState} from 'react';

const NextStream = ({eventData, children}) => {

  const [nextStream, setNextStream] = useState({});
  const [nextStreamStatus, setNextStreamStatus] = useState('offline');

  console.log('streamstatus', nextStreamStatus);

  const isNext = (event) => {
      const [eventStartDay, eventStartMonth, eventStartYear] = event?.startDate.split(
          '.').map(Number);
      const [eventStartHour, eventStartMinute] = event?.startTime.split(':')
      .map(Number);

      const [eventEndDay, eventEndMonth, eventEndYear] = event?.endDate.split(".").map(Number);
      const [eventEndHour, eventEndMinute] = event?.endTime.split(":").map(Number);

      const eventStartDateObject = new Date(eventStartYear, eventStartMonth - 1, eventStartDay, eventStartHour, eventStartMinute);
      const eventEndDateObject = new Date(eventEndYear, eventEndMonth - 1, eventEndDay, eventEndHour, eventEndMinute);

      if (eventStartDateObject > new Date() || eventEndDateObject >= new Date()){
        setNextStreamStatus('upcoming')
        if(eventStartDateObject < new Date() && eventEndDateObject >= new Date()){
          setNextStreamStatus('live');
        }
        return event;
      }
  };

  const setNextStreamValue = () => {
    const nextEvent = eventData?.find(isNext);
    if(!nextEvent){
      setNextStreamStatus('offline')
    }
    setNextStream(nextEvent);
  };

  useEffect(() => {
    setNextStreamValue();

    const interval = setInterval(setNextStreamValue, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [eventData]);

  return children({nextStream, nextStreamStatus});

};

export default NextStream;
