<template>
  <div>
    <p class = "lead">作者：{{articleName}}</p>
  </div>
</template>
<script>
  export default {
    //props可以传的一个参数，也可以设置传的参数的类型，
    // 还可以设置默认值（写默认值的时候，父组件中不需要写：articleName参数传值）
   // required 验证是否需要默认值，如果设置required，就不需要写default。required和default不能同时存在，只能写一个。
   // props:["articleName"]
    props:{
         articleName: {
           type: String,//类型还可以填写多个[String,Number]
           default:"可以传默认值"
           // required:true
         }
    }
  }
  </script>
<style scoped>
  *{color:red}
</style>
