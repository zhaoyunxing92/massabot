<template>
  <div id="app">
    <top></top>
    <router-view ref="view" :style="{'min-height': height + 'px'}"></router-view>
    <foot ref="foot"></foot>
  </div>
</template>

<script>
  import Top from './components/top/Top'
  import Foot from './components/foot/Foot'

  export default {
    name : 'app',
    components:{
      Top,
      Foot
    },
    data() {
      return {
        height: ''
      }
    },
    mounted() {
      //动态修改内容的高，foot永远在底部
      this.height = window.innerHeight - 140;
    }
  }
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }
</style>
