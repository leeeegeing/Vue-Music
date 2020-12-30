<!--
 * @Author: 李剑颖
 * @Date: 2020-12-25 16:30:40
 * @LastEditTime: 2020-12-29 17:43:48
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \vue-axios\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <div>获取歌曲详情</div>
    <button @click="getSongUrl">点击</button>
  </div>
</template>

<script>
import httpRequest from 'api/index'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    getSongUrl () {
      console.log('cc')
      let data = {
        id: 33894312
      }
      httpRequest.music.songUrl(data)
        .then(res => {
          console.log('res', res)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
