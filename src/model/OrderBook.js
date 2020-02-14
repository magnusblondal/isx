const Offer = require('./Offer')

var OrderBook = function(obj){
    obj = obj['order-book']
        ? obj['order-book']
        : obj;
    this.market = obj.market;
    this.currency = obj.currency;
    this.bid = obj.bid.map(x=> new Offer(x));
    this.ask = obj.ask.map(x=> new Offer(x));
}

OrderBook.prototype.bestAsk = function(){
    return this.ask[0]
}

OrderBook.prototype.bestBid = function(){
    return this.bid[0]
}


module.exports = OrderBook

/*
OrderBook {
  result:
   { 'order-book': 
   { 
       market: 'BTC', currency: 'ISK', bid: [Array], ask: [Array] } } } */