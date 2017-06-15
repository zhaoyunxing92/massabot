<template>
<div>
  <Slideshow :imgs="imgs"></Slideshow>
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

</style>
