import React, { useEffect, useState } from 'react';
import { useQuizStore } from '../../../stores';

const Timer = () => {
  const [countdown, setCountdown] = useState('');
  const [seconds,setSeconds] = useState(0)
  const {timeRemaining,setTimeRemaining} = useQuizStore()

  useEffect(() => {
    setSeconds(timeRemaining)
  },[])

  let timestamp = new Date().getTime() + seconds*1000

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = timestamp - now;

      if (distance < 0) {
        // Countdown is finished
        clearInterval(intervalId);
        setCountdown('Time is over!');
      } else {
        // Calculate remaining time
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeRemaining(Math.floor(distance/1000))
        setCountdown(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      }
    }, 1000);

    return () => {
      // Clean up the interval on component unmount
      clearInterval(intervalId);
    };
  }, [seconds]);

  return (
    <div className="">
      <div className="w-[150px] border-2 rounded-md border-green-700 text-green-700 font-semibold text-center py-2">
        {countdown}
      </div>
    </div>
  );
};

export default Timer;
