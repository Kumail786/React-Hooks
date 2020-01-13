import React, { useState, useEffect } from "react";

const Useeffect = () => {
  const [counter, setState] = useState({
    count: 10,
    hello: 20
  });
  useEffect(() => {
    console.log("Use Effect is running");
  }, [counter.hello]);
  return (
    <div>
      {console.log("component Rendered")}
      <p>{counter.count}</p>
      <button
        onClick={() => {
          setState({
            ...counter,
            count: counter.count + 10
          });
        }}
      >Increase Count</button>
    </div>
  );
};

export default Useeffect;
