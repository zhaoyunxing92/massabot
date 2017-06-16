<template>
  <div>
    <Slideshow :imgs="imgs"></Slideshow>
    <div class="content">

      <h1 hidden>图片区域</h1>

      <div class="middle">
        <span style="color:#444444;">
          <span style="font-size: 36px;">
            <p style="font-family: 微软雅黑;">智 能 服 务 机 器 人 趋 势</p>
          </span>
        </span>
        <span style="color:#808080;">
          <span style="font-size: 16px;">
            <p style="font-family: 微软雅黑;margin-top: 10px">科技改变生活</p>
          </span>
        </span>
        <div class="trend" style="margin-left: 15%">

        </div>
        <div class="trend" >

        </div>
        <div class="trend" >

        </div>
      </div>

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

  .middle{
    width: 100%;
    height: 500px;
    margin-top: 50px;
    margin-bottom: 50px;
    alignment: center;
  }

  .trend {
    float: left;
    width: 20%;
    height: 250px;
    margin-left: 5%;
    margin-top: 20px;
    border: 1px solid #8f8f8f
  }


</style>
