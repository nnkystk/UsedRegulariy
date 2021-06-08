// ソースコードのビルド結果を格納するディレクトリ
const distDir = __dirname + '/dist';

module.exports = {
  
  mode: 'development',
  devServer: { 
    historyApiFallback  : true, 
    contentBase         : distDir,
    host                : '127.0.0.1', //localhostを指定
    port                : 3000,
    inline              : true,
    hot                 : true,
    open                : true
  },
  watchOptions : {                 
    ignored : /node_modules/     // watch時に更新対象外とするファイルを指定
  },
  devtool: 'inline-source-map',   // 自動でSourceMap(React等のコンパイル前後の対応関係を記録したもの)を生成する

  entry : './src/index.js', 
  output : { 
    path        : distDir, 
    publicPath  : '/', 
    filename    : 'bundle.js' 
  }, 

  module : {
    rules : [{ 
      exclude : /node_modules/, 
      use : {
        loader  : 'babel-loader',
        options : {
          presets : [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
          plugins : [
            '@babel/plugin-proposal-class-properties'       // JSのclassにてstaticを有効化するために必要
          ]
        }
      }
    }]
  },
  resolve : {
    extensions : ['.js', '.jsx'] 
  }
}