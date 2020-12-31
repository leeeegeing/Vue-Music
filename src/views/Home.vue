<!--
 * @Author: 李剑颖
 * @Date: 2020-12-25 16:32:12
 * @LastEditTime: 2020-12-31 11:17:19
 * @LastEditors: Please set LastEditors
 * @Description: 首页
 * @FilePath: \vue-axios\src\views\Home.vue
-->
<template>
  <div class="home">
    <AlbumList/>
  </div>
</template>

<script>
// @ is an alias to /src
import AlbumList from '@/components/home/AlbumList.vue'

export default {
  name: 'Home',
  components: {
    AlbumList
  }
}
</script>
