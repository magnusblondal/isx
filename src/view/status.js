
module.exports = {
    stats: {},
    balance: {},

    draw: function() {
        console.log(this.stats.last_price)
        console.log(this.balance.available.BTC)
        console.log(this.value())
    },

    market: function(data) {
        this.stats = data;
    },

    balance: function(data) {
        this.balance = data;
    },

    value: function() {
        return this.balance.available.BTC * this.stats.last_price
    }
}