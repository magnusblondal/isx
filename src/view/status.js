const {toLocaleString, toPrecision, redGreen, print} = require('./text')

const log = print
let stats = {
    daily_change: 0,
    daily_change_percent: 0,
     bid: 0,
     ask: 0,
     last_price: 0,
     last_transaction_type: '-',
     last_transaction_currency: '-',
     max: 0,
     min: 0,
     open: 0,
     market_cap: 0,
     global_units: 0,
     '24h_volume': 0,
     '24h_volume_buy': 0,
     '24h_volume_sell': 0,
     '1h_volume': 0,
     '1h_volume_buy': 0,
     '1h_volume_sell': 0,
     currency: '-'
}

const p = (s, val) =>
    log(s, toLocaleString(val))

const last = (stats) =>
    `${toLocaleString(stats.last_price)} ${toLocaleString(stats.last_transaction_type)}`

const change = (stats) =>{
    let change = toLocaleString(stats.daily_change)
    let changePercent = toPrecision(stats.daily_change_percent)
    return redGreen(stats.daily_change, `${change} ${changePercent}%`)
   
} 
module.exports = {
    balance_data: {},

    draw: function() {
        this.drawDay();
    },

    market: function(data) {
        stats = data;
    },

    balance: function(data) {
        this.balance_data = data;
    },

    value: function() {
        return this.balance_data.AvailableBTC * stats.last_price
        // return this.balance_data.available.BTC * stats.last_price
    },

    drawDay: function() {
        p('OPEN:', stats.open)
        p(`HIGH:`, stats.max)
        p('LOW:', stats.min)
        log('CHANGE:', change(stats))
        p('BID:',  stats.bid)
        p('ASK:',  stats.ask)
        p('MIN:',  stats.min)
        p('MAX:',  stats.max)
        log('LAST:', last(stats))
        p('24H vol:',  stats['24h_volume'])
        p('24H buy:',  stats['24h_volume_buy'])
        p('24H sell:',  stats['24h_volume_sell'])
        p('1H buy:',  stats['1h_volume_buy'])
        p('1H vol:',  stats['11volume'])
        p('1H sell:',  stats['1h_volume_sell'])
    }
}

/*
{ market: 'BTC',
     bid: 1053000,
     ask: 1125000,
     last_price: 1053000,
     last_transaction_type: 'SELL',
     last_transaction_currency: 'ISK',
     daily_change: -78180,
     daily_change_percent: -7.42,
     max: 1053000,
     min: 1053000,
     open: 1131180,
     market_cap: 2147483647,
     global_units: 16857787,
     global_volume: 2147483647,
     '24h_volume': 21060,
     '24h_volume_buy': 0,
     '24h_volume_sell': 21060,
     '1h_volume': 0,
     '1h_volume_buy': 0,
     '1h_volume_sell': 0,
     currency: 'ISK' } }
*/