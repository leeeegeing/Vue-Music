<!--
 * @Author: 李剑颖
 * @Date: 2020-12-25 16:30:40
 * @LastEditTime: 2020-12-31 10:54:27
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \vue-axios\src\components\AlbumList.vue
-->
<template>
  <div class="album-view">
    <div class="title">EMPTY MUSIC</div>
    <div class="album-wrapper">
      <van-swipe :loop="false" :width="220" class="my-swipe" indicator-color="white">
        <van-swipe-item>
          <div class="album-item" @click="getAlbumInfo('c')">
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="album-item" @click="getAlbumInfo('c')"></div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="album-item" @click="getAlbumInfo('c')"></div>
        </van-swipe-item>
        <template #indicator>
          <div></div>
        </template>
      </van-swipe>
    </div>
    
  </div>
</template>

<script>
import {Swipe, SwipeItem} from 'vant'
import httpRequest from 'api/index'
export default {
  name: 'AlbumList',
  props: {
    msg: String
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    getAlbumInfo (data) {
      console.log(data)
    },
  }
}
</script>

<style lang="stylus" scoped>
.album-view
  .title
    padding 15px 10px 0 10px
    line-height 40px
    font-size 20px
    text-align left
    font-weight 700
  .album-wrapper
    // background #795548
    .my-swipe
      padding 10px 0
      .album-item
        margin auto
        width 200px
        height 200px
        background #8BC34A
        border-radius 25px
        overflow hidden
        box-shadow 0 1px 4px 1px rgba(204, 204, 204, .7)
</style>
