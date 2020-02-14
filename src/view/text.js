const chalk = require('chalk')

const toLocaleString =(s)=> 
    s ? s.toLocaleString() : '-'

const toPrecision =(s)=> 
    s ? s.toPrecision(3) : '-'

const redGreen = function(val, s) {
        return val >= 0
            ? chalk.green(s)
            : chalk.red(s);
    }
const log = (m) => console.log(m)

const print =(m, m2) => console.log(
    m, 
    m2 ? chalk.bold(m2) : '')

module.exports = {
    toLocaleString,
    toPrecision, 
    redGreen,
    log,
    print,
    title: (s) => log(chalk.grey.bold(s)),
    ln: ()=> log("")
}