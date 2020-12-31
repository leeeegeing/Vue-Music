<!--
 * @Author: 李剑颖
 * @Date: 2020-12-25 16:30:53
 * @LastEditTime: 2020-12-31 09:06:34
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \vue-axios\README.md
-->
# vue-axios

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 请求数据

```JavaScript
// request.js
import axios from 'axios'

// 创建请求
const service = axios.create({
    // 设置baseUr地址,如果通过proxy跨域可直接填写base地址
    baseURL: '/api',
    // 设置hheaders头部信息
    headers: {
        post: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
    },
    // 设置配置请求超时时间
    timeout: 1000,
    withCredentials: true
})

// 发出之前的拦截器
service.interceptors.request.use(
    (config) => {
        console.log('上传参数', config)
        // 在发送请求之前做什么
        return config
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (res) => {
        // 请求正常
        if (res.code === 200) {
			return res
        } else {
            // 请求失败
        }
        console.log('返回参数', res)
    },
    (error) => {
        console.log('数据请求失败', error)
    }
)

// resolve:成功  reject:失败

export default service
```

```JavaScript
// index.js

import user from './user'
import music from './music'

export default {
    user,
    music
} 
```



```javascript
// music.js
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
```



```JavaScript
// 使用
let data = {
    id: 33894312
}
httpRequest.music.songUrl(data)
    .then(res => {
        console.log('res', res)
    })
```

