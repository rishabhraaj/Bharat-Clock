import { useEffect } from "react";
import { useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <center className="curr-time">
      This is the current time :{time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </center>
  );
};

export default CurrentTime;
