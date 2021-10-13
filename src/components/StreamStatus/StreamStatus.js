import { useEffect, useState } from 'react';

const StreamStatus = ({startDate, startTime, endDate, endTime, children}) => {

  const [streamHasStarted, setStreamHasStarted] = useState(false);
  const [streamHasEnded, setStreamHasEnded] = useState(false);

  const [streamStartDay, streamStartMonth, streamStartYear] = startDate.split(".").map(Number);
  const [streamStartHour, streamStartMinute] = startTime.split(":").map(Number);

  const [streamEndDay, streamEndMonth, streamEndYear] = endDate.split(".").map(Number);
  const [streamEndHour, streamEndMinute] = endTime.split(":").map(Number);

  const streamStartDateObject = new Date(streamStartYear, streamStartMonth - 1, streamStartDay, streamStartHour, streamStartMinute);
  const streamEndDateObject = new Date(streamEndYear, streamEndMonth - 1, streamEndDay, streamEndHour, streamEndMinute);

  const setStreamValue = () => {
    setStreamHasStarted(streamStartDateObject <= new Date());
    setStreamHasEnded(streamEndDateObject <= new Date());
  }

  useEffect(() => {
    setStreamValue();
    const interval = setInterval(setStreamValue, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return children({streamHasStarted, streamHasEnded});
}

export default StreamStatus;
