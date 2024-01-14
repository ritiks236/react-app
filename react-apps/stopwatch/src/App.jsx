import React, { useState, useEffect } from 'react';

const App = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((elapsedTime) => elapsedTime + 1);
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  function startStopwatch() {
    setIsRunning(true);
  };

  function stopStopwatch() {
    setIsRunning(false);
  };

  function resetStopwatch() {
    setIsRunning(false);
    setElapsedTime(0);
  };

  function formatTime(time) {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <p>Elapsed Time: {formatTime(elapsedTime)}</p>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>Stop</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default App;

