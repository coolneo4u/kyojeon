const fs = require('fs');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const prod = process.argv.indexOf('-p') !== -1;
const css_output_template = "stylesheets/[name].css";
const js_output_template = "javascripts/[name].js";

let plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new ExtractTextPlugin(css_output_template),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  function() {
    // delete previous outputs
    this.plugin("compile", function() {
      let basepath = __dirname + "/public";
      let paths = ["/", "/javascripts", "/stylesheets"];
      for (let x = 0; x < paths.length; x++) {
        const asset_path = basepath + paths[x];
        fs.readdir(asset_path, function(err, files) {
          if (files === undefined) return;
          for (let i = 0; i < files.length; i++) {
            if (files[i].includes('.hot-update.')) {
              fs.unlinkSync(asset_path + "/" + files[i]);
            }
          }
        });
      }
    });
  }
]

if (prod) plugins.push(
  new webpack.optimize.UglifyJsPlugin({
      // sourceMap: false,
      // mangle: false

      // Eliminate comments
      comments: false,

      // Compression specific options
      compress: {
       // remove warnings
          warnings: false,
       // Drop console statements
          drop_console: true
      },
  })
)

module.exports = {
  context: __dirname + "/app/assets",
  
  entry: {
    bundle: ['./javascripts/application.jsx', "./stylesheets/application.sass"]
  },

  output: {
    path: __dirname + "/public",
    filename: js_output_template,
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      { 
        test: /\.jsx?$/,         // Match both .js and .jsx files
        exclude: /node_modules/, 
        loader: "babel-loader", 
        query:
          {
            presets:['es2015', 'react']
          }
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      {
        test: /\.sass$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      
      // loads bootstrap's css.
      { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },

  plugins: plugins
};