/*
 * @Author: 李剑颖
 * @Date: 2020-12-28 14:18:09
 * @LastEditTime: 2020-12-29 09:03:47
 * @LastEditors: Please set LastEditors
 * @Description: 用户接口
 * @FilePath: \vue-axios\src\api\user.js
 */

import Request from '@/utils/request'

// params是添加到url的请求字符串中的，用于get请求。
// data是添加到请求体（body）中的， 用于post请求。

const user = {
    // 请求登录
    login (data) {
        return Request({
            url: '/login/cellphone',
            method: 'params',
            params: data
        })
    }
}

export default user