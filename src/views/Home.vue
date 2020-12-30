<!--
 * @Author: 李剑颖
 * @Date: 2020-12-25 16:32:12
 * @LastEditTime: 2020-12-29 17:06:11
 * @LastEditors: Please set LastEditors
 * @Description: 首页
 * @FilePath: \vue-axios\src\views\Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <van-button type="primary">主要按钮</van-button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
