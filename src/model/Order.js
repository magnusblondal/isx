var Order = function(obj){
    this.id = obj.id;
    this.side = obj.side;
    this.type = obj.type;
    this.amount = obj.amount;
    this.amountRemaining = obj.amount_remaining;
    this.price = obj.price;
    this.avgPriceExecuted = obj.avg_price_executed;
    this.stopPrice = obj.stop_price;
    this.currency = obj.currency;
    this.market = obj.market;
    this.status = obj.status;
    this.replaced = obj.replaced;
    this.replacedBy = obj.replaced_by;
    this.timestamp = obj.timestamp; 
}

Order.prototype.equals = function(offer){
    return this.amount === offer.orderAmount
        && this.price === offer.price
        && this.timestamp === offer.timestamp
}

module.exports = Order

/*{ id: 28199,
    side: 'sell',
    type: 'limit',
    amount: 0.0275,
    amount_remaining: 0.0275,
    price: 910100,
    avg_price_executed: 0,
    stop_price: 0,
    currency: 'ISK',
    market: 'BTC',
    status: 'ACTIVE',
    replaced: 28081,
    replaced_by: 0,
    timestamp: 1577108124 } */