const config = require('../../config.json')
const secret = require('../../config.secret.json')

exports.get = key => process.env[key] || config[key] || secret[key]