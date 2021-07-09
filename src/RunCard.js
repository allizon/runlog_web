import React from "react";
export var RunCard = function (props) {
    return (React.createElement("div", { className: "fl w-25 pa2 ma1 ba" },
        React.createElement("h3", null,
            props.distanceInKm,
            "km Run"),
        React.createElement("div", null, props.runDate.toString()),
        React.createElement("div", null, props.description)));
};
