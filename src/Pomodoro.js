import React, { useState, useEffect } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(30);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  // const percent = Math.round((timerMinutes * 60 + timerSeconds) * 100 / (25 * 60));

  return (
    <div className="pomodoro">
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
      <div className="message">
        {true && <div>Pomodoro</div>}
      </div>
    </div>
  );
}
