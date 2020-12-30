<!--
 * @Author: 李剑颖
 * @Date: 2020-12-25 16:30:53
 * @LastEditTime: 2020-12-30 16:44:21
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 请求数据
```JavaScript
let data = {
    id: 33894312
}
httpRequest.music.songUrl(data)
    .then(res => {
        console.log('res', res)
    })
```