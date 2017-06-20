<template>
  <div>
    <Slideshow :imgs="imgs"></Slideshow>
    <div class="content">

      <div class="section1">
        <div class="section11" style="margin-left: 25%;border-left: none">
          <img src="../../assets/img/home/selection01.jpg"/>
          <span>
            <p>客制化</p>
          </span>
        </div>
        <div class="section11">
          <img src="../../assets/img/home/selection02.jpg"/>
          <span>
            <p>智能服务</p>
          </span>
        </div>
        <div class="section11">
          <img src="../../assets/img/home/selection03.jpg"/>
          <span>
            <p>物联网</p>
          </span>
        </div>
        <div class="section11">
          <img src="../../assets/img/home/selection04.jpg"/>
          <span>
            <p>响应式布局</p>
          </span>
        </div>
      </div>

      <div class="middle">
        <span style="color:#444444;font-size: 36px;">
            <p style="font-family: 微软雅黑; padding-top: 80px">智 能 服 务 机 器 人 趋 势</p>
        </span>
        <span style="color:#808080;font-size: 16px;">
            <p style="font-family: 微软雅黑;margin-top: 20px">科技改变生活</p>
        </span>

        <div class="trend" style="margin-left: 26%;">
          <div class="signal">
            <img style="margin-top: 22%;width: 42px" src="../../assets/img/home/￥.jpg"/>
          </div>
          <p class="p-font">降低成本</p>
          <span class="normal-span" >
            <p style="padding-top: 20px">以机器代替越来</p>
            <p style="padding-top: 5px">越高的人工成本</p>
          </span>
        </div>

        <div class="trend" >
          <div class="signal">
            <img style="margin-top: 22%;width: 50px" src="../../assets/img/home/gxh.jpg"/>
          </div>
          <p class="p-font">定制服务</p>
          <span class="normal-span">
            <p style="padding-top: 20px">为每位用户定制</p>
            <p style="padding-top: 5px">属于自己的服务</p>
          </span>
        </div>

        <div class="trend" >
          <div class="signal">
            <img style="margin-top: 22%;width: 42px" src="../../assets/img/home/good.jpg"/>
          </div>
          <p class="p-font">便捷享受</p>
          <span class="normal-span">
            <p style="padding-top: 20px">近乎随时、随地</p>
            <p style="padding-top: 5px">地享受定制服务</p>
          </span>
        </div>
      </div>

      <div class="midddle2">

      </div>


      <div class="img-2">
        <span style="font-size: 36px; font-family: 微软雅黑; color: #FFFFFF">
          <p style="float: left;padding-top: 150px;padding-left: 25%">智慧生活，精彩无极限</p>
          <p style="float: left;clear: left;padding-top: 16px;padding-left:52%;">选择我们开启未来生活</p>
        </span>
        <!--<img style="width: 100%;height: 400px;z-index: -1" src="../../assets/img/finiger.jpg"/>-->
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
    height: 2500px;
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
    alignment: center;
    background-color: #f4f6f7;
    margin: 0 auto;
  }

  .trend {
    float: left;
    width: 15%;
    height: 300px;
    margin-left: 1%;
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

  .img-2{
    width: 100%;
    height: 400px;
    background-image: url("../../assets/img/home/finiger.jpg");
  }

  .midddle2{
    width: 100%;
    height: 600px;
  }

  .section1{
    width: 100%;
    height: 209px;
    background-color: #31353d;
  }

  .section11{
    width: 236px;
    height: 99px;
    float: left;
    margin-top: 57px;
    margin-left: 5px;
    border-left: 1px dotted #394a5b;
  }

  div[class='section11'] > span{
    font-size: 15px;
    font-family: 微软雅黑;
    color: rgb(211, 211, 211);
  }

  div[class='section11'] >span > p{
    margin-top: 15px;
  }


</style>
