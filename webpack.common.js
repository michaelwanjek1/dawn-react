const path = require("path")

module.exports = {
    entry: {
        'index': "./src/index.js"
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
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    output: {
        filename: "react-app.bundle.js",
        path: path.resolve(__dirname, "assets")
    }
}