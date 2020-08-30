import React from "react";

interface RunType {
  id: number;
  runDate: Date;
  distanceInKm: number;
  duration: number;
  description: string;
}

export const RunCard = (props: RunType) => {
  return (
    <div className="fl w-25 pa2 ma1 ba">
      <h3>{props.distanceInKm}km Run</h3>
      <div>{props.runDate.toString()}</div>
      <div>{props.description}</div>
    </div>
  );
};
