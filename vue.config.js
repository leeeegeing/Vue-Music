/*
 * @Author: 李剑颖
 * @Date: 2020-12-29 17:38:24
 * @LastEditTime: 2020-12-29 17:47:21
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \vue-axios\vue.config.js
 */

module.exports = {
    lintOnSave: false,
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: {//配置跨域
            '/': {
                target: 'http://106.52.238.52:3000/',//这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': ''//请求的时候使用这个api就可以
                }
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'api': '@/api',
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
            }
        }
    }
}