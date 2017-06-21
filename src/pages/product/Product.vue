<template>

  <div>

  <div>
    <Slideshow :imgs="imgs"></Slideshow>
  </div>

    <div class="content">

      <div class="product1">
        <div class="v-div">
          <video width="320px" height="240px" controls="controls">
            <source src="../../assets/video/massabot.mp4" type="video/mp4" />
            您的浏览器不支持 video 标签。
          </video>
        </div>
      </div>

      <div class="product2">

      </div>

    </div>
  </div>

</template>
<script>
  import Slideshow from '../../components/slideshow/Slideshow.vue'
  export default({
    name:"product",
    data(){
      return {
        imgs : [ {
          "url" : "http://57a994eaa7437.t73.sites.qifeiye.com/qfy-content/uploads/2016/08/874e5234b09a4bbb1a7c4434596b36f7.jpg"
        } ]
      }
    } ,
    components : {
    Slideshow
  }
  })
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .content{
    width: 100%;
    height: 2000px;
  }

  .product1{
    width: 100%;
    height: 800px;
    background-color: #f4f6f7;
    margin-top: 50px;
  }

  .v-div{
    width: 360px;
    height: 270px;
  }

  .product2{
    width: 100%;
    height: 800px;
    background-color: #f4f6f7;
    margin-top: 50px;
  }

</style>
