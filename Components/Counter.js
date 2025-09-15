import React from "react";

export default function Counter({ number }) {
  const [counter, setCounter] = React.useState(0);

  // Third Attempts
  React.useEffect(() => {
    const timer = counter < number && setInterval(() => setCounter(counter + 1), 3000 / number);
    return () => clearInterval(timer);
  }, [counter, number]);

  return <span>{counter}</span>;
}
