const path = require('path')
const CracoLessPlugin = require('craco-less')
const { CracoAliasPlugin } = require('react-app-alias')

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // modifyVars: { "@primary-color": "#1DA57A" },
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: CracoAliasPlugin,
            options: {},
        },
    ],
}
