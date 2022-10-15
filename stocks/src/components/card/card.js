import { APIHelper } from "../../API";
import "./card.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
// import react wrapper
import React, { useEffect } from "react";

const moneyFormatter = new Intl.NumberFormat(`en-US`, {
  currency: `USD`,
  style: "currency",
});

const timeFormatter = new Intl.RelativeTimeFormat("en-US");

export default function Card(props) {

  const getDataFromTimeSeries = (timeSeries) => {
    const data = Object.keys(timeSeries).map((key) => {
      return {
		formattedDate: new Date(key).toLocaleDateString('en-US', { timeZone: 'UTC' }),
        dateTime: new Date(key),
        closePrice: APIHelper.timeSeries.getClosePrice(timeSeries[key]),
      };
    });
    return data.reverse();
  };

  useEffect(() => {});

  const CustomToolTip = function ({ payload, label, active }) {
    if (active) {
      return (
        <div className="tooltip">
		<p>{`${label.toLocaleDateString('en-US')}`}</p>
          <p className="label">
			{`${label.toLocaleTimeString('en-US', { timeZone: 'UTC' })}`}
		</p>
          <p className="intro">{`${moneyFormatter.format(
            payload[0].value
          )}`}</p>
          {/* <p className="description"></p> */}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card">
      <div id="graph-canvas" className="card-graph">
        <LineChart
          width={props.width}
          height={props.height}
          data={getDataFromTimeSeries(props.timeSeries)}
        >
          <Line type="natural" dataKey={"closePrice"} stroke="#00FF00" dot={false}  />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="dateTime" stroke="#FFF" hide={true} />
          <YAxis stroke="#FFF" domain={['dataMin', 'dataMax']}/>
          <Tooltip content={<CustomToolTip />} />
        </LineChart>
      </div>
      <div className="card-text">
        <h2 className="stock-name">{props.symbol}</h2>
        <h3 className="stock-value">{moneyFormatter.format(props.price)}</h3>
      </div>
    </div>
  );
}
