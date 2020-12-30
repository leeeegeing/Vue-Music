/*
 * @Author: 李剑颖
 * @Date: 2020-12-29 17:28:13
 * @LastEditTime: 2020-12-29 17:48:00
 * @LastEditors: Please set LastEditors
 * @Description: 音乐API集合
 * @FilePath: \vue-axios\src\api\music.js
 */

import Request from '@/utils/request'

const music = {
    // 歌曲详情
    songUrl (data) {
        return Request({
            url: '/song/url',
            method: 'get',
            params: data
        })
    }
}

export default music