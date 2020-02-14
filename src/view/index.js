const status = require('./status');
const bestOrders = require('./bestOrders');
const connection = require('./connectionState')

const composite = {
    foo: function(views) {
        this.views = views
    },

    draw: function() {
        console.clear()
        console.log('--- C ---')
        if(this.views) {
            this.views.map(x=> x.draw())
        }
    }
}

module.exports = {
    composite,
    status,
    bestOrders,
    connection
}
