
var BalancesAndInfo = function(obj){
    obj = obj['balances-and-info'] 
        ? obj['balances-and-info']
        : obj;

    this.result = obj;
}

BalancesAndInfo.prototype.AvailableISK = function() {
    return this.result.available.ISK;
}

BalancesAndInfo.prototype.OnHoldBTC = function() {
    return this.result.on_hold.BTC;
}

module.exports = BalancesAndInfo;

/*{ 'balances-and-info':
   { on_hold: { BTC: [Object] },
     available: { ISK: 316.6 },
     fee_bracket: { maker: 1, taker: 1 },
     isk_volume: 0,
     exchange_aur_volume: 0 } }
     */