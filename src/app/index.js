const util = require('util')
const api = require('../api')
const c = require('../pairs');
const view = require('../view')

// console.log(api)
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
    var res = await api.order_book(c.market.btc, c.currency.isk)
    console.log(res);  
}
const historical_prices = async ()=> {
    var res = await api.historical_prices(c.market.btc, c.currency.isk, c.timeframe.mo1)
    console.log(res)
}
 // private
const balances_and_info_P = async ()=> {
    var r = await api.balances_and_info();
    console.log(r);
    const o = r['balances-and-info'];
    console.log(o);
    console.log(o.available.BTC);
    console.log(o.available.ISK);
}

const balances_and_info = async ()=> {
    var r = await api.balances_and_info();
    return r['balances-and-info'];
}

const open_orders = async ()=> {
    var r = await api.balances_and_info();
    console.log(r);
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

const main = async () => {
    const state = await sync();
    // await transactions();
    // await order_book();
    // await historical_prices();
    const balance = await balances_and_info();
    // await user_transactions();
    // await crypto_deposit_address();
    // await deposits();
    // await withdrawals();
    view.status.market(state.stats)
    view.status.balance(balance)
    view.status.draw()

    await setTimeoutPromise(time)
    main();
}

module.exports = {
    start: async () => {
        main();
    }
}