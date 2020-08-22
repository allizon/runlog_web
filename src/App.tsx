import React, { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";

import { listCharacters } from "./character";

listCharacters();

function App() {
  // const [db, setDb] = useState({});
  // const [err, setErr] = useState(null);

  useEffect(() => {
    console.log("app.useEffect");

    // initSqlJs({
    //   // Required to load the wasm binary asynchronously. Of course, you can
    //   // host it wherever you want You can omit locateFile completely when
    //   // running in node
    //   locateFile: (file) => `./node_modules/sql.js/dist/sql-wasm.wasm`,
    // })
    //   .then((SQL) => {
    //     setDb(new SQL.Database());
    //     console.log("db loaded");
    //   })
    //   .catch((err) => setErr(err));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
