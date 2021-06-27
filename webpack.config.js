const {resolve} = require('path');
const htmlPack = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // 入口
    output: { // 出口
        filename: "index.js",
        path: resolve(__dirname, "dist")
    },
    module: {
        rules: [ /*详细配置loader*/
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ],
    },
    plugins: [/* plugins 配置 */
        new htmlPack({
            // 开发者也可以指定在哪个HTML文件上添加要打包的内容
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
    ],
    // node: "development",
    // node: "production",
};
