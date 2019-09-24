const production = require('./production.mode.js')
const development = require('./development.mode.js')
module.exports = (env) => {
    console.log(!!env.production);
    return (!!env.production ? production() : development())
}
