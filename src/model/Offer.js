var Offer = function(obj) {
    this.o = obj
    this.price = obj.price;
    this.orderAmount = obj.order_amount;
    this.orderValue = obj.order_value;
    this.convertedFrom = obj.converted_from;
    this.timestamp = obj.timestamp
}

module.exports = Offer

/*
{ 
    price: 910100,
    order_amount: 0.0275,
    order_value: 25027.75,
    converted_from: null,
    timestamp: 1577108124 }, */