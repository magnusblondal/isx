const util = require('util')
const api = require('../api')
const c = require('../pairs');
const view = require('../view')
const model = require('../model')
const bidAskView = view.bestOrders;
const connectionView = view.connection;

const setTimeoutPromise = util.promisify(setTimeout)
const time = 10 * 1000 * 2;

const sync = async () => {
    return await api.sync(c.market.btc, c.currency.isk)
}
const transactions = async ()=> {
    const res = await api.transactions(c.currency.usd, 3);
    console.log(res.transactions);  
    console.log(res.transactions.data);  
}
const order_book = async () => {
    return res = await api.order_book(c.market.btc, c.currency.isk)
}

const historical_prices = async ()=> {
    var res = await api.historical_prices(c.market.btc, c.currency.isk, c.timeframe.mo1)
    console.log(res)
}

const balances_and_info = async ()=> {
    return await api.balances_and_info();
}

const open_orders = async ()=> {
    return await api.open_orders();
}

const user_transactions = async ()=> {
    var r = await api.user_transactions(c.market.btc, c.currency.isk, 10, c.side.empty);
    console.log(r);
    console.log(r.user-transactions);
}

const crypto_deposit_address = async ()=> {
    var r = await api.crypto_deposit_address(c.market.btc, 10);
    console.log(r);
}

const deposits = async ()=> {
    var r = await api.deposits(c.currency.all, 10, c.status.all);
    console.log(r);
}

const withdrawals = async ()=> {
    var r = await api.withdrawals(c.currency.all, 10, c.status.all);
    console.log(r);
}

const composite = view.composite
composite.foo(
    //[connectionView, bidAskView])
   [connectionView, bidAskView, view.status])

const main = async () => {
    connectionView.fetching()

    composite.draw()

    const state = await sync();
    // await transactions();
    // await historical_prices();

    const bal = await balances_and_info();
    // log(bal.AvailableISK())
    // log(bal.OnHoldBTC())

    const openOrders = await open_orders();
    const orderBook = await order_book();
    bidAskView.openOrders(openOrders)
    bidAskView.orderBook(orderBook)
    //bidAskView.draw()

    // await user_transactions();
    // await crypto_deposit_address();
    // await deposits();
    // await withdrawals();
    // console.log(state)

     view.status.market(state.stats)
     view.status.balance(bal)
      //view.status.draw()
    //  let con = view.composite.draw(
    //      [connectionView, bidAskView, view.status])
    connectionView.done()
    composite.draw();

    await setTimeoutPromise(time)
    main();
}

const log = (s) => console.log(s);

module.exports = {
    start: async () => {
        main();
    }
}