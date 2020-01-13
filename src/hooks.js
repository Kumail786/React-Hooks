import React, { useState } from "react";

const Hook = () => {
  const [count, setCount] = useState(10);
  const [hello, setHello] = useState(20);
  return (
    <div>
      <div>Use State</div>
      <p>Current State is {count}</p>
      <p>Current Hello is {hello}</p>
      <button
        onClick={() => {
          setCount(count + 10);
        }}
      >
        Increase State Count
      </button>
      <button
        onClick={() => {
          setHello(hello + 10);
        }}
      >
        Increase Hello Count
      </button>
    </div>
  );
};

export default Hook;
