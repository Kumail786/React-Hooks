import React,{useState,useEffect} from "react";

const Useeffect = () => {
  const [counter, setState] = useState({
    count: 10,
    hello: 20
  });
  useEffect(() => {
    console.log("Use Effect is running");
  },[counter.count]);
  return <div>
{console.log("component Rendered")}
  </div>;
};

export default Useeffect;
