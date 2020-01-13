import React, { useState } from "react";

const Hook = () => {
  const [counter, setState] = useState({
    count: 10,
    hello: 20
  });
  return (
    <div>
      <div>Use State</div>
      <p>Current State is {counter.count}</p>
      <p>Current Hello is {counter.hello}</p>
      <button
        onClick={() => {
          setState({
            ...counter,
            count: counter.count + 10
          });
        }}
      >
        Increase State Count
      </button>
      <button
        onClick={() => {
          setState({
            ...counter,
            hello: counter.hello + 10
          });
        }}
      >
        Increase Hello Count
      </button>
    </div>
  );
};

export default Hook;
