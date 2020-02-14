const col = require('./litir')
let state = {
    fetching: false
}

module.exports = {
    fetching: function(){
        state.fetching = true;
    },
    done: function(){
        state.fetching = false;
    },
    draw: function(){
        console.log(state.fetching ? "Sæki..." : " ")
    }
}