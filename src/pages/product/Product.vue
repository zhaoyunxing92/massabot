<template>

  <div>

    <div class="pro-top">

      <div class="title">
        <span>
          <p style="padding-top: 150px">内容还需要好好想想，再想想</p>
          <p style="font-size: 16px;padding-top: 20px">科技，让生活更智能</p>
        </span>
      </div>

    </div>

    <div class="content">

      <div class="product1">
        <div class="v-div">
          <!--poster 封面-->
          <video controls="controls" > <!-- poster="https://zhaoyunxing92.github.io/images/avatar.png"-->
            <source type="video/mp4" src="massabot/src/assets/video/massabot.mp4">
            <p>您的浏览器不支持 video 标签。</p>
          </video>
        </div>
      </div>

      <div class="product2">
        <div class="v-div">
          <!--poster 封面-->
          <video controls="controls" > <!-- poster="https://zhaoyunxing92.github.io/images/avatar.png"-->
            <source type="video/mp4" src="https://zhaoyunxing92.github.io/massabot/src/assets/video/massabot.mp4">
            <p>您的浏览器不支持 video 标签。</p>
          </video>
        </div>
      </div>

    </div>
  </div>

</template>
<script>
  import Slideshow from '../../components/slideshow/Slideshow.vue'
  export default({
    name : "product" ,
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

  .content {
    width: 100%;
    height: 2000px;
  }
  .pro-top{
    width: 100%;
    height: 440px;
    background-image: url("../../assets/img/product/pro-slide.jpg");
  }

  .title{
    width: 600px;
    height: 400px;
    margin: 0 auto;
  }

  div[class='title'] > span{
    color:#FFFFFF;
    font-size: 36px;
    font-family: 微软雅黑;
  }

  .product1 {
    width: 100%;
    height: 800px;
    border: solid 1px rgb(211, 211, 211);
    margin-top: 50px;
  }

  .v-div {
    width: 360px;
    height: 270px;
    margin-left: 10%;
    padding-top: 50px;
  }

  .product2 {
    width: 100%;
    height: 800px;
    border: solid 1px rgb(211, 211, 211);
    margin-top: 50px;
  }

</style>
