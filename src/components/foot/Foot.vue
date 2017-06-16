<template>
  <div class="foot" ref="foot">
    <div  class="focus">
      <p>关注我们</p>
      <img  src="../../assets/img/aicreate.png" width="100px" height="100px"/>
    </div>

    <div class="contact">
      <p style="font-size: 15px">联系我们</p><br/><br/>
      <p>电话&nbsp;&nbsp;:&nbsp;&nbsp;400-800-6000</p><br/><br/>
      <p>网址&nbsp;&nbsp;:&nbsp;&nbsp;www.aicreate.cc</p><br/><br/>
      <p>邮箱&nbsp;&nbsp;:&nbsp;&nbsp;zhaolonghai1988@gmail.com</p><br/><br/>
      <p>地址&nbsp;&nbsp;:&nbsp;&nbsp;广东省 东莞市 松山湖管委会	和堂路松山湖国际机器人产业基地17栋A</p>
    </div>

    <div class="news">
      <p style="font-size: 15px">最新资讯</p><br/>
      <p>我公司与东莞第二人民医院合作开发.....</p><br/>
    </div>

    <div class="about_us">
      <p style="font-size: 15px">关于我们</p><br/>
      <p>致力于将只能机器人带入普通家庭<br/>
        ...............
      </p>
    </div>

    <div class="copyright">
      <p style="font-size: 13px">版权所有&nbsp;©2017&nbsp;&nbsp; 地址:&nbsp;广东省东莞市高新区松山湖管委会总部一号17#A302&nbsp;&nbsp;京ICP备********号</p>
    </div>

  </div>
</template>
<script>
  export default({
    name : "foot" ,
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foot{
  height: 300px;
  border-top: solid 1px;
  width: 100%;
  background-color: #2c2c2c;
  color: #8f8f8f;
}

  .focus{
    width: 15%;
    height: 150px;
    margin-left: 10%;
    margin-top: 50px;
    font-size:15px;
    float: left;
  }


div[class='foot'] > div[class='focus'] > p{
  float: left;
  margin-bottom: 15px;
}
div[class='foot'] > div[class='focus'] > img{
  float: left;
  clear: both;
}

.contact{
  float: left;
  width: 20%;
  margin-top: 50px;
  text-align: left;
  font-size: 13px;
}

div[class='foot'] > div[class='contact'] > p{
  float: left;
}

.news{
  float: left;
  width: 20%;
  margin-top: 50px;
  margin-left: 5%;
  text-align: left;
  font-size: 13px;
}

.about_us{
  float: left;
  width: 20%;
  margin-top: 50px;
  text-align: left;
  font-size: 13px;
  margin-left: 5%;
}

.copyright{
  clear: both;
  margin-top: 250px;
}

</style>
