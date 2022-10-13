import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-graph"></div>
	  <div className="card-text">
		<h2 className="stock-name">{props.symbol}</h2>
		<h3 className="stock-value">{props.price}</h3>
	  </div>
    </div>
  );
}
