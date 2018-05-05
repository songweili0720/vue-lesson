<template>
  <div class="alert alert-info">
    <slot name="one">{{msg}}</slot>
    <slot name="two">{{msg1}}</slot>
  </div>
</template>
<script>
  export  default {
    data:function(){
      return {
        msg:"这是一个页面!",
        msg1:"插入多个html标签也就是dom元素"
      }
    }
  }
</script>
