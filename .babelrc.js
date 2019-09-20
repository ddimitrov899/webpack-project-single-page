module.exports = {
    "presets": [
        (process.env.NODE_ENV === 'production')
            ? [
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
            : ["@babel/preset-react"]
    ]

}
