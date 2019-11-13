const config  = require('../configuration')
const Http = require('./http');
const curr = require('../pairs');

const http = new Http();
const uri = config.get('isx-uri')

module.exports = {
    sync: async (market, currency) => 
      await http.get(`${uri}stats?market=${market}&currency=${currency}`),

    transactions: async (currency=curr.isk, limit=2) => 
        await http.get(`${uri}/transactions?currency=${currency}&limit=${limit}`),

    order_book: async (market, currency) => 
      await http.get(`${uri}order-book?market=${market}&currency=${currency}`),

    historical_prices: async (market, currency, timeframe) => 
      await http.get(`${uri}historical-prices?market=${market}&currency=${currency}&timeframe=${timeframe}`),
}
