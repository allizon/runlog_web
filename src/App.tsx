import React, { useEffect, useState } from "react";
import "tachyons";

const fetchTest = async () => {
  const out = await fetch("http://localhost:8080/runs/all")
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      console.log(error.toString());
    });
  return await out;
};

function App() {
  const [output, setOutput] = useState({});

  const getOutput = async () => {
    let output = await fetchTest();
    setOutput(output);
  };

  useEffect(() => {
    getOutput();
  }, []);

  return (
    <div className="App mw8 center pa2">
      <h1>Runlog</h1>
      <pre>waaah i want some {output.toString()}</pre>
    </div>
  );
}

export default App;
