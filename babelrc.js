
module.exports = function (env) {
    console.log(env)
    return ({
        "presets": [
            /*(process.env.NODE_ENV === 'local')
                ?*/ [
                    "@babel/preset-env",

                    {
                        "modules": false,
                        "spec": true,
                        "useBuiltIns": "usage",
                        "exclude": [
                            "@babel/plugin-proposal-unicode-property-regex"
                        ],
                        "shippedProposals": true,
                        "corejs": {
                            "version": 3,
                            "proposals": true
                        }
                    }
                    , "@babel/preset-react"
                ]
                /*: ["@babel/preset-react"]*/
        ]
    })
}
