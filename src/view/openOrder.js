let {toLocaleString, log} = require('./text')
const chalk = require('chalk')
const loc = toLocaleString
const bold = chalk.bold

module.exports = {
    draw: function(order) {
        // console.log(order)
        log(`Price: ${bold(loc(order.price))} Amount: ${bold(order.amount)} Amt. remaining: ${order.amountRemaining} ${order.side} ${order.type}`)
    }
}