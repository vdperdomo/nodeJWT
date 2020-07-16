const NodemonPlugin = require( 'nodemon-webpack-plugin' );

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new NodemonPlugin(),
    ],
    target: 'node',
    resolve: {
        // directories where to look for modules
        extensions: [".js", ".json"],
    }
};