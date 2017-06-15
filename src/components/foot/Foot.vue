<template>
  <div class="foot" ref="foot">
    这个是底部,内容自己填
  </div>
</template>
<script>
  export default({
    name : "foot" ,
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.foot{
  text-align: center;
  height: 80px;
  border-top: solid 1px red;
  width: 100%;
  background-color: #2c3e50;
  color: white;
  bottom:0;
}
</style>
