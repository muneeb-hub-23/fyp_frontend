import React from "react";
import VerticalBarChart from "./VerticalBarChart";

const DataBox = (props) => {


  return (
    <div className="databox">
      <h2>{props.class} {props.section}</h2>
      <VerticalBarChart data = {props.data} />
    </div>
  );
};

export default DataBox;