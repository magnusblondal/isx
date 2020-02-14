const BalancesAndInfo = require('./BalancesAndInfo');
const OpenOrders = require('./OpenOrders');
const OrderBook = require('./OrderBook');
const Order = require('./Order');
const Offer = require('./Offer');

// module.exports = Object.assign({}, BalancesAndInfo);
module.exports = {
    BalancesAndInfo,
    OpenOrders, 
    OrderBook,
    Order,
    Offer,
}