import React from "react";
import "tachyons";
import { RunTotals } from "./RunTotals";
import { RunCardGrid } from "./RunCardGrid";
var App = function () {
    return (React.createElement("div", { className: "App mw8 center pa2" },
        React.createElement("h1", null, "Runlog"),
        React.createElement(RunTotals, null),
        React.createElement(RunCardGrid, null)));
};
export default App;
