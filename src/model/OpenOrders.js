var Order = require('./Order')

var OpenOrders = function(obj){
    obj = obj['open-orders']
        ? obj['open-orders']
        : obj;
    this.result = obj
    this.market = obj.market
    this.currency = obj.currency
    this.bid = obj.bid.map(x=> new Order(x))
    this.ask = obj.ask.map(x=> new Order(x))
}

OpenOrders.prototype.monkey = function(asks){
    const mitt = this.ask[0]
    return asks.filter(x=> 
        mitt.amount === x.orderAmount
        && mitt.price === x.price
        && mitt.orderAmount === x.order_amount
        )
}

OpenOrders.prototype.isBestAsk = function(orderBook){
    const mitt = this.ask[0]
    const bestAsk = orderBook.ask[0]
    return mitt ? mitt.equals(bestAsk) : true
}

OpenOrders.prototype.isBestBid = function(orderBook){
    const mitt = this.bid[0]
    const best = orderBook.bid[0]
    return mitt ? mitt.equals(best) : true;
}

OpenOrders.prototype.HasBid = function(){
    return this.bid.length > 0;
}

OpenOrders.prototype.HasAsk = function(){
    return this.ask.length > 0;
}

module.exports = OpenOrders

/*{ 'open-orders':
   { market: 'ALL',
     currency: 'ORIGINAL',
     bid: [],
     ask: [ [Object] ] } }
*/