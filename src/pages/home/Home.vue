<template>
  <div>
    <Slideshow :imgs="imgs"></Slideshow>
    <div class="content">
      <h1>图片区域</h1>
      <div class="img">
        <img class="item" src="../../assets/img/img_1.jpg" alt="图片">
        <img class="item" src="../../assets/img/img_3.jpg" alt="图片">
        <img class="item" src="../../assets/img/img_4.jpg" alt="图片">
        <img class="item" src="../../assets/img/img_1.jpg" alt="图片">
        <!-- <img class="item" src="../../assets/img/img_4.jpg" alt="图片">-->
      </div>
      <h1>视频区域</h1>
      <div class="video">
        <video src=""></video>
        <video src=""></video>
      </div>
    </div>
  </div>

</template>
<script>
  import Slideshow from '../../components/slideshow/Slideshow.vue'
  export default({
    name : "home" ,
    data(){
      return {
        imgs : [ {
          "url" : "http://57a994eaa7437.t73.sites.qifeiye.com/qfy-content/uploads/2016/08/9c2ced7e170f834fec883dbee06b90ff.jpg"
        } ]
      }
    } ,
    components : {
      Slideshow
    }
    // 选项
  })
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    width: 100%;
  }
  .content > .img > img[class='item'] {
    width: 20%;
    height: 250px;
    margin: 5px 5px;
    border: solid 0.08rem #eeeeee;
  }

</style>
