import { useState, useEffect } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("The Number state is updated!");
  }, [number]);

  useEffect(() => {
    console.log("Component did mount!");

    const interval = setInterval(() => {
      setNumber((i) => i + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      <hr />
    </div>
  );
}
