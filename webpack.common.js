const path = require("path")

module.exports = {
    entry: {
        'cart-tool-tip': "./src/cart-tool-tip.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "assets")
    }
}