const production = require('./production.mode.js')
const development = require('./development.mode.js')
console.log(process.env.NODE_ENV)
module.exports = process.env.NODE_ENV === 'development' ? development() : production()
