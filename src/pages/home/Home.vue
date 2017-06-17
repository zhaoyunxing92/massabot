<template>
  <div>
    <Slideshow :imgs="imgs"></Slideshow>
    <div class="content">

      <div class="middle">
        <span style="color:#444444;font-size: 36px;">
            <p style="font-family: 微软雅黑; padding-top: 80px">智 能 服 务 机 器 人 趋 势</p>
        </span>
        <span style="color:#808080;font-size: 16px;">
            <p style="font-family: 微软雅黑;margin-top: 20px">科技改变生活</p>
        </span>

        <div class="trend" style="margin-left: 15%;">
          <div class="signal">
            <img style="margin-top: 22%;width: 42px" src="../../assets/img/￥.jpg"/>
          </div>
          <p class="p-font">人工成本</p>
          <span class="normal-span" >
            <p style="padding-top: 20px">以机器代替越来</p>
            <p style="padding-top: 5px">越高的人工服务</p>
          </span>
        </div>

        <div class="trend" >
          <div class="signal">
            <img style="margin-top: 22%;width: 50px" src="../../assets/img/gxh.jpg"/>
          </div>
          <p class="p-font">定制服务</p>
          <span class="normal-span">
            <p style="padding-top: 20px">为每位用户定制</p>
            <p style="padding-top: 5px">属于自己的服务</p>
          </span>
        </div>

        <div class="trend" >
          <div class="signal">
            <img style="margin-top: 22%;width: 42px" src="../../assets/img/finiger.jpg"/>
          </div>
          <p class="p-font">便捷享受</p>
          <span class="normal-span">
            <p style="padding-top: 20px">近乎随时、随地</p>
            <p style="padding-top: 5px">地享受定制服务</p>
          </span>
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
    height: 600px;
    margin-bottom: 50px;
    alignment: center;
    background-color: #f4f6f7;
  }

  .trend {
    float: left;
    width: 20%;
    height: 300px;
    margin-left: 5%;
    margin-top: 20px;
    border: 1px solid #9f9f9f;
    background-color: white;
  }

  .signal{
    width: 84px;
    height: 84px;
    border: 2px solid #499ff5 ;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 50px;
    z-index: 1;
  }

  .p-font{
    font-family: 微软雅黑;
    padding-top: 10px;
    font-size: 22px;
    color: #808080;
  }
  .normal-span{
    font-size: 14px;
    font-family: 微软雅黑;
  }


</style>
