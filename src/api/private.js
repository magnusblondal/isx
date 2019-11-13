const config  = require('../configuration')
const Http = require('./http');
const crypto  = require('./crypt')
const c = require('../pairs');

const http = new Http();
const uri = config.get('isx-uri')

module.exports = {
    balances_and_info: async function() {
        return await http.post(`${uri}balances-and-info`, crypto.sign({}))
    },

    open_orders: async function(market, currency) {
        var params = {
            market: market,
            currency: currency
        };       
        return await http.post(`${uri}open-orders`, crypto.sign(params))
    },
    
    /*
    market (string) - Three-letter currency code. If omitted, all orders will be returned. Must be a market supported by the exchange.
    currency (string) - Three-letter currency code. Will filter by transactions involving this currency. When omitted, all transactions will be displayed.
    limit (int) - The amount of transactions to return.
    side (string) - Filters transactions by type ("buy" or "sell").
    */
    user_transactions: async function(market, currency, limit, side=null) {
        var params = {
            market: market,
            currency: currency, 
            limit: limit,
            side: side
        };       
        return await http.post(`${uri}user-transactions`, crypto.sign(params))
    },

    crypto_deposit_address: async function(market, limit) {
        var params = {
            market: market, 
            limit: limit
        };       
        return await http.post(`${uri}crypto-deposit-address/get`, crypto.sign(params))
    },

    /*
    currency (string) - Three-letter currency code. Will filter by deposits involving this currency. When omitted, all deposits will be displayed.
    limit (int) - The amount of deposits to return.
    status (string) - Filters deposits by status ("pending", "completed" or "cancelled").*/ 
    deposits: async function(currency, limit, status) {
        var params = {
            currency: currency,
            limit: limit,
            status: status
        };       
        return await http.post(`${uri}deposits/get`, crypto.sign(params))
    },

    /*
    currency (string) - Three-letter currency code. Will filter by withdrawals involving this currency. When omitted, all withdrawals will be displayed.
    limit (int) - The amount of withdrawals to return.
    status (string) - Filters withdrawals by status ("pending", "completed" or "cancelled"). */
    withdrawals: async function(currency, limit, status) {
        var params = {
            currency: currency,
            limit: limit,
            status: status
        };       
        return await http.post(`${uri}withdrawals/get`, crypto.sign(params))
    },

    /*
    market (string) - Three-letter currency code. Required. The market in which the order will be placed.
    currency (string) - Three-letter currency code. The currency in which the order will be placed.
    side (string) - Can be "buy" or "sell".
    type (string) - Can be "market", "limit" or "stop". "stop" orders can contain both a stop_price and limit_price - they will be processed in an OCO (One Cancels the Other) fashion, which means that whichever one is executed first will cancel the other.
    limit_price (float) - The limit price for the order, in the order currency.
    stop_price (float) - The stop price for the order, in the order currency. A "stop" order can have both a stop and limit price as explained in "type".
    amount (float) - The amount of BTC to buy or sell.
    orders (array) - This parameter is used only if you intend to place multiple orders in one API request. It should be an array or JSON string containing all the previous parameters for each element, such that orders[n] = ['side'=>x,'type'=>y,...]. It can be a simple array of HTTP parameters, or can be formatted as JSON. */
    // TODO
    place_order: async function() {
        var params = {};       
        return await http.post(`${uri}orders/new`, crypto.sign(params))
    },
    
    /*
    id (int) - The unique identifier of the order that you wish to edit.
    type (string) - Can be "market", "limit" or "stop". "stop" orders can contain both a stop_price and limit_price - they will be processed in an OCO (One Cancels the Other) fashion, which means that whichever one is executed first will cancel the other.
    limit_price (float) - The limit price for the order, in the order currency.
    stop_price (float) - The stop price for the order, in the order currency. A "stop" order can have both a stop and limit price as explained in "type".
    amount (float) - The amount of BTC to buy or sell.
    orders (array) - This parameter is used only if you intend to edit multiple orders in one API request. It should be an array or JSON string containing all the previous parameters for each element, such that orders[n] = ['id'=>x,'type'=>y,...]. It can be a simple array of HTTP parameters, or can be formatted as JSON. */
    // TODO
    edit_order: async function() {
        var params = {};       
        return await http.post(`${uri}orders/edit`, crypto.sign(params))
    },

    /*
    id (int) - The unique identifier of the order that you wish to edit.
    orders (array) - This parameter is used only if you intend to get the status of multiple orders in one API call. It should be an array or JSON string containing an id parameter for each element, such that orders[n] = ['id'=>x]. It can be a simple array of HTTP parameters, or can be formatted as JSON.
    all (bool) - Sending this parameter will cancel ALL orders. Use with caution!
     */
    // TODO
    cancel_order: async function() {
        var params = {};       
        return await http.post(`${uri}orders/cancel`, crypto.sign(params))
    },

    /*
    id (int) - The unique identifier of the order that you wish to edit.
    orders (array) - This parameter is used only if you intend to get the status of multiple orders in one API call. It should be an array or JSON string containing an id parameter for each element, such that orders[n] = ['id'=>x]. It can be a simple array of HTTP parameters, or can be formatted as JSON. */
    // TODO
    order_status: async function() {
        var params = {};       
        return await http.post(`${uri}orders/status`, crypto.sign(params))
    },

    /**
    currency (string) - The three-letter abbreviation for the currency that you wish to withdraw. It must match the currency on the account if you are withdrawing fiat.
    amount (float) - The amount that you wish to withdraw, in the above currency.
    address (string) - For crypto withdrawals, the blockchain address to which you wish to withdraw.
    account_number (int) - For Fiat withdrawals, the bank account to which you would like to withdraw your currency.
    */
    // TODO
    withdraw: async function() {
        var params = {};       
        return await http.post(`${uri}withdrawals/new`, crypto.sign(params))
    },

    
}
