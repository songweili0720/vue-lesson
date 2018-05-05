<template>
  <div>
    <button class="btn btn-primary" @click="share">分享次数</button>
  </div>
</template>
<script>
  export default{
    methods:{
      share(){
        //shared是父组件的函数
         this.$emit("shared",{
           name:"子组件传参数给父组件",
           age:26
        });
      }
    }
  }
  </script>
