<!--
 * @Author: 李剑颖
 * @Date: 2020-12-25 16:30:40
 * @LastEditTime: 2020-12-30 17:41:20
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \vue-axios\src\components\AlbumList.vue
-->
<template>
  <div class="album-view">
    <div class="album-wrapper">
      <van-swipe class="my-swipe" indicator-color="white">
        <van-swipe-item>
          <div class="album-item"></div>
        </van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
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
    getSongUrl () {
      console.log('cc')
      Toast('点击结算')
    },
    // 弹出层
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only
.album-item{
  padding-top: 50%;
  width: 100%;
  background: #4CAF50;
}
 -->
<style lang="stylus" scoped>
.album-view
  .album-wrapper
    background red
</style>
