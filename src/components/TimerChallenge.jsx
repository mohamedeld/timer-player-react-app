import { useState } from "react";


const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeExpire, setTimeExpire] = useState(false);
  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimeExpire(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  };
  const handleStop = () => {
    clearTimeout(timer.current);
  };
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpire && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p onClick={timerStarted ? handleStop : handleStart}>
        <button>{timerStarted ? "Stop" : "Start"} Challenge</button>
      </p>
      <p className={timerStarted ? "active" : ""}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
};

export default TimerChallenge;
