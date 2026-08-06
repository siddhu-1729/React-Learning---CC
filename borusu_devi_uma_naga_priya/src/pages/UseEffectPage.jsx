import { useState, useEffect } from "react";

function UseEffectPage() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>useEffect Example</h1>

      <h2>Digital Clock</h2>

      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
}

export default UseEffectPage;