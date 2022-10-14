import { APIHelper } from "../../API";
import "./card.css";
import bb, {line} from "billboard.js";
import "billboard.js/dist/billboard.css";  // default css
// import react wrapper
import BillboardJS, {IChart} from "@billboard.js/react";
import React, {useEffect, useRef} from "react";

const moneyFormatter = new Intl.NumberFormat(`en-US`, {
  currency: `USD`,
  style: "currency",
});

export default function Card(props) {

	const chartComponent = useRef<IChart>(0);

  
  const getDataFromTimeSeries = (timeSeries) => {
	const arrPrices = Object.keys(timeSeries).map((key) => APIHelper.timeSeries.getClosePrice(timeSeries[key]));
	console.log(arrPrices);
	return {
		data: {
			columns: [
				['data1', ...arrPrices]
			],
			type: line()
		}
	};
  }

  //redraw the line graph every time state is updated
  useEffect(() => {
	// get the instance from ref
	const chart = chartComponent.current?.instance;
	// call APIs
	if (chart) {
		chart.load();
	}
  });

  return (
    <div className="card">
      <div id="graph-canvas" className="card-graph">
	  <BillboardJS bb={bb} options={getDataFromTimeSeries(props.timeSeries)} ref={chartComponent} />
	  </div>
      <div className="card-text">
        <h2 className="stock-name">{props.symbol}</h2>
        <h3 className="stock-value">{moneyFormatter.format(props.price)}</h3>
      </div>
    </div>
  );
}
