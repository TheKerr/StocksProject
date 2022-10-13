import React from "react";
import Card from "../card/card";
import { exampleShortQuote } from "../../exampledata";
import "./main.css";

export default function Main() {
  function getStockSymbolFromGlobalQuote(globalQuote) {
    return globalQuote["01. symbol"];
  }

  function getStockPriceFromGlobalQuote(globalQuote) {
    return globalQuote["05. price"];
  }

  return (
    <div id="main-container">
      <Card
        symbol={getStockSymbolFromGlobalQuote(exampleShortQuote["Global Quote"])}
        price={getStockPriceFromGlobalQuote(exampleShortQuote["Global Quote"])}
      />
    </div>
  );
}
