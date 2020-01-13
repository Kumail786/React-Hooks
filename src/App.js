import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hook from "./hooks/useState";
import Useeffect from "./hooks/useEffect";

function App() {
  return (
    <div className="App">
      <h1>We are going to Use React Hooks</h1>
      <Hook />
      <Useeffect />
    </div>
  );
}

export default App;
