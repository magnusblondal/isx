const openOrderView = require('./openOrder')
let {print, title, ln} = require('./text')
const say = require('./say');
const log = print

let OpenOrders = {
    HasAsk: () => false,
    HasBid: () => false,
}
let OrderBook = {}

const drawOrders = (orders) =>
    orders.map(x=> openOrderView.draw(x))

module.exports = {
    openOrders: (openOrders) =>
        OpenOrders = openOrders,

    orderBook: (orderBook) =>
        OrderBook = orderBook,

    draw: function() {
        title("ASK's")
        if (OpenOrders.HasAsk()) {
            drawOrders(OpenOrders.ask);

            if(OpenOrders.isBestAsk(OrderBook)) {
                say.ok('Best ASK')
            } else {
                say.ho('! Best ASK')
            }
        } else {
            log("No open ask's")
        }

        ln()
        title("BID's")
        if (OpenOrders.HasBid()) {            
            drawOrders(OpenOrders.bid);

            if(OpenOrders.isBestBid(OrderBook)) {
                say.ok('Best BID')
            } else {
                say.bad('! Best BID')
            }
        } else {
            log("No open bids's")
        }
    }
}