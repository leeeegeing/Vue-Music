<!--
 * @Author: 李剑颖
 * @Date: 2020-12-25 16:30:40
 * @LastEditTime: 2020-12-30 16:52:04
 * @LastEditors: Please set LastEditors
 * @Description: 入口文件
 * @FilePath: \vue-axios\src\App.vue
-->
<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
