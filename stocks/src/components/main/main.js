import React from "react";
import Card from "../card/card";
import { exampleShortQuote, exampleData } from "../../exampledata";
import "./main.css";
import { APIHelper } from "../../API";

export default function Main() {
  const globalQuote = APIHelper.globalQuote.getGlobalQuote(exampleShortQuote);

  return (
    <div id="main-container">
      <Card
        timeSeries={APIHelper.timeSeries.getTimeSeries5Min(exampleData)}
        symbol={APIHelper.globalQuote.getStockSymbol(globalQuote)}
        price={APIHelper.globalQuote.getStockPrice(globalQuote)}
      />
    </div>
  );
}
