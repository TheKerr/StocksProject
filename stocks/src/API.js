export const APIHelper = {
  timeSeries: {
    getClosePrice: function (json) {
      return json["4. close"];
    },

    getTimeSeries5Min: function (json) {
      return json["Time Series (5min)"];
    },
  },

  globalQuote: {
    getStockSymbol(globalQuote) {
      return globalQuote["01. symbol"];
    },

    getStockPrice(globalQuote) {
      return globalQuote["05. price"];
    },

    getGlobalQuote(json) {
      return json["Global Quote"];
    },
  },
};
