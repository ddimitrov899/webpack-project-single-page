const production = require('./production.mode.js')
const development = require('./development.mode.js')
module.exports = (env) => {
    return (!!env.production ? production() : development())
}
