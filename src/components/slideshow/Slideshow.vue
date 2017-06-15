<template>
  <div class="slideshow">
    <div v-for="img in imgs">
      {{img.clickUrl}}
      <img :src="img.url" :title="img.title">
    </div>
  </div>
</template>
<script>
  /**
   * 轮播图组件
   */
  export default({
    name : 'slideshow' ,
    props : {
      imgs : {
        type : Array ,
        required : true ,
      }
    }
  })
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .slideshow > div > img {
    width: 100%;
    /*max-height: 360px;*/
  }
</style>
