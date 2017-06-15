<template>
  <div>
    <Slideshow :imgs="imgs"></Slideshow>
    <div class="content">
      <div class="left">
        <img
          src="http://static.qifeiye.com/caches/6461770d9ee5ba1eee87b0a74d075159/aHR0cDovLzU3YTk5NGVhYTc0MzcudDczLnNpdGVzLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOC8wMTJmYWQ4YmJmMTgwYTJhOTYxYzNjZWExODcxNjg4ZS5wbmc_p_p100_p_3D.png"
          alt="手机图" width="100%" height="100%">
      </div>
      <div class="right">
        <div>
          <h2>战略合作企业案例</h2>
        </div>
        <div>
          大幅度发的说法当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。我们可以满足您的所有需求。
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Slideshow from '../../components/slideshow/Slideshow.vue'
  export default({
    // 选项
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
  height: 300px;
}
.content > .left{
  width: 50%;
  height: 100%;
  float: left;
}
.content > .right{
  padding-bottom: 10px;
}
</style>
