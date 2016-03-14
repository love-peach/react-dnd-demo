# react-dnd-demo

基于[react-dnd](https://github.com/gaearon/react-dnd)项目，做的一个拖拽demo。因为需要将拖拽事件做到react里面，目前水平还达不到，直接用人家写好的插件，这样比较快。

## 主要目的

- [ ] 熟悉react-dnd的使用
- [ ] 熟悉h5拖拽事件的使用
- [ ] 熟悉webpack的使用

## webpack的使用

### 安装webpack 
> npm install -g webpac

### 配置Webpack

Webpack的构建过程需要一个配置文件，一个典型的配置文件大概就是这样

```javascript
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        entry1: './entry/entry1.js',
        entry2: './entry/entry2.js'
    },
    output: {
        path: __dirname,
        filename: '[name].entry.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }]
    },
    plugins: [commonsPlugin]
};
```



参考链接：[轻松入门React和Webpack](https://segmentfault.com/a/1190000002767365)

