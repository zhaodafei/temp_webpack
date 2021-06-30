const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', // 开发者模式
    // node: "production",
    // entry: './src/index.ts' // ts 入口
    entry: './src/index.js', // js 入口
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "js/bundle.js",
        publicPath: "./",
        environment: {  // 告诉webpack，不使用箭头函数(兼容IE11)
            arrowFunction: false,
            const: false
        }
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'postcss-preset-env'
                                ]
                            }
                        }
                    },
                    'less-loader'
                ]
            },
            {  // ts,根据需要自行配置
                test: /\.ts$/i,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                // 配置信息
                                {
                                    // 要兼容的目标浏览器
                                    targets: {
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                    // 指定corejs 的版本
                                    "corejs": "3",
                                    // 根据用户的代码按需加载
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: "8082",
        publicPath: "/"
    },
    resolve:{
        extensions: ['.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 模板文件
            template: "./src/template_fei01.html",
            // 在output的指定目录里创建该命名的文件
            filename: "index.html",
            // 选择该HTML文件加载哪个js，顺序从右到左
            // chunks:["index","common"],
            // 压缩
            // minify: {
            //     collapseWhitespace: true, // 去除空格(谨慎使用)
            //     removeComments: true // 移除注释
            // }
        }),
        new CleanWebpackPlugin(), // 每次清除dist 目录重新生成
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
};
