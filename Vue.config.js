// 配置正向代理
module.exports = {
    devServer: {
        proxy: {
            "/mz": {
                "target": "https://m.maizuo.com",
                "changeOrigin": true,
                "pathRewrite": {
                    "^/mz": "/"
                }

            }
        }
    }
}