<template>
  <div class="menu">
    <el-menu class="el-menu" mode="horizontal" @select="handleSelect">
      <img class="logo" src="../../assets/logo/logo.png" alt="logo" @click="$router.push('/')"/>
      <div v-if="!item.hidden&&item.leaf" v-for="(item,i) in $router.options.routes">
        <el-menu-item v-loading.fullscreen.lock="fullscreenLoading" index=i :class="$route.path==item.path?'active':''"
                      @click="$router.push(item.path)">{{item.name}}
        </el-menu-item>
      </div>
      <div v-if="!item.hidden&&!item.leaf&&item.children&&item.children.length>0"
           v-for="(item,index) in $router.options.routes">
        <el-submenu index="index+10">
          <template slot="title">{{item.name}}</template>
          <div v-if="!grandson.hidden" v-for="(grandson,index) in item.children">
            <el-menu-item v-loading.fullscreen.lock="fullscreenLoading" :class="$route.path==grandson.path?'active':''"
                          index="index+10" @click="$router.push(grandson.path)">{{grandson.name}}
            </el-menu-item>
          </div>
        </el-submenu>
      </div>
      <!--<div class="experience">免费体验</div>-->
    </el-menu>
  </div>

</template>
<script>
  export default({
    name : 'top' ,
    data() {
      return {
        fullscreenLoading : false
      };
    } ,
    methods : {
      handleSelect( key , keyPath ) {
        this.fullscreenLoading = true;
        setTimeout ( () => {
          this.fullscreenLoading = false;
        } , 500 );
      }
    }
  })
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .active {
    border-bottom: solid 0.3rem #20a0ff;
    color: #20a0ff !important;
    font-size: 16px;
    box-sizing: border-box;
  }

  /**去除饿了么激活css*/
  .is-active {
    color: #2c3e50;
  }

  div[class='menu'] > ul > .logo {
    margin: 0px 50px 0px 10%;
    float: left;
    height: 60px;
    left: 10px;
  }

  /*手机css*/
  @media screen and (min-width: 320px) and (max-width: 480px) {
    div[class='menu'] > ul > .logo {
      display: none;
    }

    div[class='menu'] {
      width: 100%;
    }
  }

  /**平板*/
  @media only screen and (min-width: 321px) and (max-width: 1024px) {
    div[class='menu'] > ul > .logo {
      margin: 0px 30px 0px 5%;
      /*width: 331px;*/
      /*display: inline;*/
    }

    div[class='menu'] {
      width: 100%;
    }
  }

  /**pc*/
  @media only screen and (min-width: 1029px) {

  }

</style>

