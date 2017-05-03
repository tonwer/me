const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: "bundle.css"
});

const config = {
 
  entry: ["./src/app.tsx"],

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
 
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
            test: /\.less$/,
            use: extractLess.extract({
                use: [{
                    loader: "css-loader", options: {
                    sourceMap: true
                  }
                }, {
                    loader: "less-loader", 
                    options: {
                    sourceMap: true
                  }
                }]
            })
      }
    ]
  },  
  plugins: [
      extractLess
  ]
};

module.exports = config;