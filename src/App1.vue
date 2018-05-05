<template>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <app-announcement>
        <p slot="one">这是p标签 slot的作用</p>
        <p slot="two">这是p标签 slot的作用,添加两个标签p</p>
      </app-announcement>
    </div>
    <app-article></app-article>
    <!--<app-user></app-user>-->
  </div>
</div>
<!--<div>-->
  <!--<app-header></app-header>-->
  <!--<app-user></app-user>-->
  <!--<app-footer></app-footer>-->
  <!--<router-link to="/">home</router-link>-->
  <!--<router-link to="/helloworld">helloword</router-link>-->
<!--</div>-->
</template>

<script>
  import Header from "./layout/Header.vue";
  import Footer from "./layout/Footer.vue";
export default {
  components:{
    //局部组件
    "app-footer":Footer,
    "app-header":Header
  }

}
</script>

