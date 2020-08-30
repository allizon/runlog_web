import React, { useEffect, useState } from "react";
import { List } from "immutable";
import "tachyons";

import { RunCard } from "./RunCard";

const fetchAllRuns = async () => {
  const out = await fetch("http://localhost:8080/runs/all")
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      console.log(error.toString());
    });
  return await out;
};

interface RunType {
  id: number;
  runDate: Date;
  distanceInKm: number;
  duration: number;
  description: string;
}

const App = () => {
  const [runs, setRuns] = useState([]);
  // const [runCards, setRunCards] = useState([{}]);

  const getOutput = async () => {
    let output = await fetchAllRuns();
    console.log(output);
    setRuns(output);
    return output;
  };

  const RunCardSet = () => {
    const cards = List(runs).map((run: RunType) => {
      return <RunCard key={run.id} {...run} />;
    });

    // const sampleRun: RunType = {
    //   id: 1,
    //   runDate: new Date(),
    //   distanceInKm: 5.0,
    //   duration: 1200,
    //   description: "This is just a test",
    // };
    // const sampleCard = <RunCard {...sampleRun} />;

    return <React.Fragment>{cards}</React.Fragment>;
  };

  useEffect(() => {
    getOutput();
  }, []);

  return (
    <div className="App mw8 center pa2">
      <h1>Runlog</h1>
      <RunCardSet />
    </div>
  );
};

export default App;
