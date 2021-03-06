module.exports={
    lintOnSave: false,
    publicPath: process.env.VUE_APP_publicPath,
    // 输出文件目录
    outputDir: 'dist',
    assetsDir: 'assets',
    productionSourceMap: false,
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '后台管理系统',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
        
    },
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: true,
        proxy: {
            'api': {
                target: 'http://tinyshop.tucy.top',
                ws: true,
                changeOrigin: true,
                // pathRewrite:{
                    //     //     '^/hyperone':'/'
                    //     // }
            },
        }
    }
}