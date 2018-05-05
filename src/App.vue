<template>

<div>
  <app-header></app-header>
  <transition name="fade">
  <router-view></router-view>
  </transition>
  <!--<app-footer></app-footer>-->

</div>
</template>
<>
<style>
  *{
    padding: 0px;
    margin: 0px;
  }
</style>
<script>
  import Header from "./simweb/Header.vue";
  import Footer from "./simweb/Footer.vue";
  import Content from "./simweb/Content.vue";
export default {
  components:{
    //局部组件
    "app-footer":Footer,
    "app-header":Header,
    "app-content":Content
  }

}
</script>

