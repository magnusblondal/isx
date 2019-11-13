const CryptoJS = require('crypto-js');
const config  = require('../configuration')

module.exports = {
    sign: function (params) {
        params.api_key = config.get('api_key');;
        params.nonce = this.nonce();
        params.signature = this.hash(params);
        return params;
    },

    nonce: function() {
        return Math.round(new Date().getTime() / 1000);
    }, 

    hash: function(params) {
        const api_secret = config.get('api_secret');

        return CryptoJS.HmacSHA256(
            CryptoJS.enc.Base64.stringify(
                CryptoJS.enc.Utf8.parse(JSON.stringify(params))), 
            api_secret).toString()
    }
}