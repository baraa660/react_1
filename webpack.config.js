const path = require("path");
module.exports = {
  
  entry: "./src/index.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
            ]
        },
        {
          test: /\.(js|jsx)$/, // Matches both .js and .jsx files
          exclude: /node_modules/, // Exclude the node_modules directory
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.svg$/,
          use: 'file-loader'
        }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve these extensions
  },
  
  
  devServer: {
    static: {
        directory: path.join(__dirname, 'public'),
      },
    port: 3001, // Port for the development server
    open: true, // Open the default web browser when the server starts
  },
  

};