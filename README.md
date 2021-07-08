# temp_webpack
webpack demo

```wiki
使用说明:


安装依赖 npm  install

启动: npm serve 

```

```
在 webpack.config.js 可以修改是否使用ts作为入口


#如果webpack 是全局安装的不需要指定目录,直接使用命令即可,下面的都是(非全局安装webpack)指定目录的命令
#当前使用"webpack": "^5.38.1", "webpack-cli": "^3.11.2"
npm init
    -----package name:   webpack_fei
npm i webpack webpack-cli   #npm install webpack webpack-cli
webpack 

.\node_modules\.bin\webpack -v  #不是全局安装的webpack 用这个命令 查看版本(windows中执行)
./node_modules/.bin/webpack -v  #不是全局安装的webpack 用这个命令 查看版本(linux 中执行)


#打包
./node_modules/.bin/webpack
#或者 ./node_modules/.bin/webpack --mode=development 
#或者 ./node_modules/.bin/webpack ./src/index.js


npm install html-webpack-plugin
npm install style-loader css-loader
```
